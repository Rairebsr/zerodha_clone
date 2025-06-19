import React from "react";
import TeamMember from "@/components/TeamMember.jsx";

import Nithin from "@/assets/ceo_nithin-kamath.jpg";
import Nikhil from "@/assets/co-founder_Nikhil.jpg";
import Kailash from "@/assets/CTO_Kailash.jpg";
import Venu from "@/assets/COO_Venu.jpg";
import Hanan from "@/assets/CCO_Hanan.jpg";
import Karthik from "@/assets/chief_of_education_karthik.jpg";
import Austin from "@/assets/deirector_strategy_Austin.jpg";
import Seema from "@/assets/Director_Seema.jpg";

const About = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        We pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed mb-12">
        <p>
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company Zerodha,
          a combination of Zero and "Rodha", the Sanskrit word for barrier.
          <br /><br />
          Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India.
          <br /><br />
          Over 1.6+ crore clients place billions of orders every year through our 
          powerful ecosystem of investment platforms, 
          contributing over 15% of all Indian retail trading volumes.
        </p>
        <p>
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.
          <br /><br />
          <a href="/" className="text-blue-500 underline">Rainmatter</a>, our
          fintech fund and incubator, has invested in several fintech startups
          with the goal of growing the Indian capital markets.
          <br /><br />
          And yet, we are always up to something new every day. Catch up on the
          latest updates on our <a href="/" className="text-blue-500 underline">blog</a> or see what we're up to on social media.
        </p>
      </div>

      <h2 className="text-3xl font-semibold text-center mb-8">People</h2>

      {/* CEO Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <img
          src={Nithin}
          alt="Nithin Kamath"
          className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="text-2xl font-semibold">Nithin Kamath</h3>
          <p className="text-gray-500 mb-4">Founder, CEO</p>
          <p className="mb-4 text-gray-700">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br /><br />
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
            <br /><br />
            Playing basketball is his zen.
          </p>
          <p>
            Connect on{" "}
            <a href="/" className="text-blue-500 underline">Homepage</a> /{" "}
            <a href="/" className="text-blue-500 underline">TradingQnA</a> /{" "}
            <a href="/" className="text-blue-500 underline">Twitter</a>
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TeamMember
          name="Nikhil Kamath"
          role="Co-founder & CFO"
          image={Nikhil}
          bio="Nikhil is an astute and experienced investor, and he heads 
          financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        />
        <TeamMember
          name="Dr. Kailash Nath"
          role="CTO"
          image={Kailash}
          bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, 
          and is the brain behind all our technology and products. 
          He has been a developer from his adolescence and continues to write code every day."
        />
        <TeamMember
          name="Venu Madhav"
          role="COO"
          image={Venu}
          bio="Venu is the backbone of Zerodha taking care of operations 
          and ensuring that we are compliant to rules and regulations. 
          He has over a dozen certifications in financial markets and is also 
          proficient in technical analysis. Workouts, cycling, and adventuring 
          is what he does outside of Zerodha."
        />
        <TeamMember
          name="Hanan Delvi"
          role="CCO"
          image={Hanan}
          bio="We take pride in the way we support our clients, and 
          Hanan is responsible for this with his never ending flow of energy. 
          He is the man behind many of our support initiatives that have helped us stay ahead of the game.
           A free thinker, Hanan can be seen posing as one in his free time."
        />
        <TeamMember
          name="Seema Patil"
          role="Director"
          image={Seema}
          bio="Seema who has lead the quality team since the beginning of Zerodha, 
          is now a director. She is an extremely disciplined fitness enthusiast."
        />
        <TeamMember
          name="Karthik Rangappa"
          role="Chief of Education"
          image={Karthik}
          bio="Karthik Guru Rangappa single handledly wrote Varsity,
           Zerodha's massive educational program. He heads investor education 
           initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        />
        <TeamMember
          name="Austin Parkesh"
          role="Director Strategy"
          image={Austin}
          bio="Austin is a successful self-made entrepreneur from Singapore. 
          His area of specialty revolves around helping organisations 
          including grow by optimizing revenue streams and creating growth strategies. 
          He is a boxing enthusiast and loves collecting exquisite watches."
        />
      </div>
    </div>
  );
};

export default About;
