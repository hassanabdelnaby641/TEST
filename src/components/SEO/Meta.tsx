import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

const Meta: React.FC<MetaProps> = ({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title} | ADRIXA</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ADRIXA",
          "description": description,
          "image": image,
          "url": "https://adrixa.com",
          "sameAs": [
            "https://instagram.com/adrixa",
            "https://facebook.com/adrixa",
            "https://linkedin.com/company/adrixa",
            "https://tiktok.com/@adrixa"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default Meta;