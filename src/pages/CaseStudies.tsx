import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import { BarChart3, Eye, MousePointer, DollarSign, Target, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import CaseStudyHero from '@/components/case-studies/CaseStudyHero';
import ClientTestimonial from '@/components/case-studies/ClientTestimonial';
import BeforeAfterShowcase from '@/components/case-studies/BeforeAfterShowcase';
import GifShowcase from '@/components/case-studies/GifShowcase';

import CaseStudyCTA from '@/components/case-studies/CaseStudyCTA';
import { getCaseStudies, type CaseStudy } from '@/lib/api';

const CaseStudies = () => {
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studies = await getCaseStudies();
        if (studies.length > 0) {
          const data = studies[0]; // Display the latest case study
          
          // Transform Supabase data to component expected shape
          const transformedData = {
            client: data.client,
            project: data.project,
            mainTestimonialVideo: data.main_testimonial_video,
            pullQuote: data.pull_quote,
            beforeAfterVideos: {
              testimonials: {
                before: data.before_video_testimonial,
                after: data.after_video_testimonial
              },
              tutorials: {
                before: data.before_video_tutorial,
                after: data.after_video_tutorial
              },
              verticalAds: {
                before: data.before_video_ad,
                after: data.after_video_ad
              }
            },
            gif: {
              id: 1,
              title: data.gif_title,
              thumbnail: data.gif_thumbnail
            },
            results: data.results.map((r: any) => ({
              ...r,
              icon: getIconByName(r.icon)
            }))
          };
          setCaseStudy(transformedData);
          
          // Initialize Wistia for these videos
          const videoIds = [
            data.main_testimonial_video,
            data.before_video_testimonial,
            data.after_video_testimonial,
            data.before_video_tutorial,
            data.after_video_tutorial,
            data.before_video_ad,
            data.after_video_ad
          ].filter(id => id && !id.startsWith('youtube:')); // Filter out empty or youtube IDs

          loadWistiaScripts(videoIds);
        }
      } catch (error) {
        console.error('Failed to load case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getIconByName = (name: string) => {
    const icons: Record<string, any> = {
      BarChart3, Eye, MousePointer, DollarSign, Target, Award
    };
    return icons[name] || BarChart3;
  };

  const loadWistiaScripts = (videoIds: string[]) => {
    // Add Wistia scripts to head
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const scripts: HTMLScriptElement[] = [];
    videoIds.forEach(id => {
      const script = document.createElement('script');
      script.src = `https://fast.wistia.com/embed/${id}.js`;
      script.async = true;
      script.type = 'module';
      document.head.appendChild(script);
      scripts.push(script);
    });

    // Add Wistia styles to head
    const style = document.createElement('style');
    style.textContent = videoIds.map(id => `
      wistia-player[media-id='${id}']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${id}/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `).join('');
    document.head.appendChild(style);
  };

  if (loading) {
    return <div className="min-h-screen bg-black pt-24 text-white text-center">Loading case studies...</div>;
  }

  if (!caseStudy) {
    return <div className="min-h-screen bg-black pt-24 text-white text-center">No case studies found.</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <ModernHeader />
      
      <main className="pt-24">
        <CaseStudyHero mainTestimonialVideo={caseStudy.mainTestimonialVideo} />
        <ClientTestimonial 
          mainTestimonialVideo={caseStudy.mainTestimonialVideo}
          pullQuote={caseStudy.pullQuote}
        />
        <BeforeAfterShowcase beforeAfterVideos={caseStudy.beforeAfterVideos} />
        <GifShowcase gif={caseStudy.gif} />
        
        <CaseStudyCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;