import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";
import { getSortedUpdates } from "@/lib/updates.js";

const HomePage = () => {
  const latestUpdate = getSortedUpdates()[0];
  
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  // const teamMembers = [{
  //  name: "Cody McCullough",
  //  role: "Studio Head & Creative Lead"
  //}, {
  //  name: "Katie Fogarty",
  // role: "Marketing Manager"
  //}, {
  //  name: "Matt Brown",
  //  role: "Business Operations Lead"
  //}];

  return <>
      <Helmet>
        <title>Project Neverphorm</title>
        <meta name="description" content="Indie Game Studio with a lot of ambitions." />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}

          {/* Content */}


        {/* About Section */}

        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
                About the Studio
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                Project Neverphorm is an independent game development studio founded and operated by solo developer, Cody McCullough. 
                After 15+ years of all sorts of ideas and concepts, Cody decided to take the leap and start the journey back in early 2025. 
                With 15+ years of only conceptualizing these ideas, there are now games in the back catalog that are officially planned and 
                need to be put into development. There is a refusal to stay stuck or aligned with only one genre, as these projects vary drastically 
                in their core vision and game/creative direction. 
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Team Section */}


        {/*<section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-snug text-center">
              The Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-50px"
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Card className={`h-full transition-all duration-300 team-card-hover ${member.isOpenPosition ? 'bg-card/50 border-primary/30' : 'bg-card/50 border-border/50'}`}>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                      <CardDescription className={`font-medium mt-1 ${member.isOpenPosition ? 'text-primary' : 'text-primary/80'}`}>
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>*/}

        {/* Games section */}

          {/* Contact Section */}
          <section id="contactus" className="max-w-6xl mx-auto px-6 pb-24">
            <ContactSection />
          </section>
            </main>

      <Footer />
    </>;
};
export default HomePage;