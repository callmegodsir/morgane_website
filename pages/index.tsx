import TagSEO from "@/components/TagSEO";
import TagSchema from "@/components/TagSchema";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <TagSEO
        canonicalSlug=""
        title={undefined}
        description={undefined}
        keywords={undefined}
        og={undefined}
      />
      <TagSchema />

      <main>
        
       {/* <Hero /> */}

       
      </main>
    </>
  );
}
