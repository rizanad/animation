import GlassesGuy from "../../assets/glasses-guy.svg";
import ReadingGuy from "../../assets/guy-reading.svg";
import Girl from "../../assets/girl.svg";
import LaptopBoy from "../../assets/laptop-boy.svg";

const FirstTask = () => {
  return (
    <div className="p-10">
      <h1 className="font-outfit text-[#414141] font-[500] text-[24px] ml-16">
        Your SkillShikshya Journey
      </h1>
      <div className="text-[32px] font-[700] pt-2 mb-10 ml-16">
        <span className="text-[#1DA077]">Step </span>
        <span>In.</span>
        <span className="text-[#1DA077]">Skill </span>
        <span>Up.</span>
        <span className="text-[#1DA077]">Stand </span>
        <span>Out.🚀</span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="relative bg-[#F45B5B] h-[341px] w-[592px] rounded-[30px] flex flex-col justify-center items-end pr-10 pl-[280px] ml-16 animate-box-floating">
          <img
            src={GlassesGuy}
            alt="Thinking Guy"
            className="absolute left-[-80px] top-[10px] animate-floating"
            style={{
              width: "320px",
              height: "420px",
              objectFit: "contain",
            }}
          />

          <div className="flex flex-col items-end text-right gap-[32px] z-10">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-nohemi text-[#FAFAFA] font-[700] text-[32px] leading-tight">
                Start with Clarity
              </h2>
              <p className="font-outfit text-[#FAFAFA] text-[20px] font-[500] leading-snug">
                Step into a better learning path.
              </p>
            </div>
            <p className="font-outfit text-[#FAFAFA] text-[16px] font-[400] max-w-[280px] leading-relaxed">
              Overwhelmed by too many learning options? SkillShikshya provides a
              clear, curated roadmap from the start.
            </p>
          </div>
        </div>

        <div className="relative bg-[#5492A0] h-[341px] w-[592px] rounded-[30px] flex flex-col justify-center items-start pl-10 pr-[280px] ml-16 animate-box-floating">
          <div className="flex flex-col items-start text-left gap-[32px] z-10">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-nohemi text-[#FAFAFA] font-[700] text-[32px] leading-tight">
                Learn by Doing
              </h2>
              <p className="font-outfit text-[#FAFAFA] text-[20px] font-[500] leading-snug">
                Practical skills, real projects.
              </p>
            </div>
            <p className="font-outfit text-[#FAFAFA] text-[16px] font-[400] max-w-[280px] leading-relaxed">
              Theory is great, but action is better. At SkillShikshya, you learn
              by doing. Hands-on projects and real-world scenarios help you
              build, break, and create—leading to true mastery.
            </p>
          </div>

          <img
            src={ReadingGuy}
            alt="Reading Guy"
            className="absolute right-[-20px] top-[10px] animate-floating"
            style={{
              width: "320px",
              height: "420px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="relative bg-[#6C64A8] h-[341px] w-[592px] rounded-[30px] flex flex-col justify-center items-end pr-10 pl-[280px] ml-16 animate-box-floating">
          <img
            src={Girl}
            alt="Thinking Guy"
            className="absolute left-[-80px] top-[50px] animate-floating"
            style={{
              width: "400px",
              height: "450px",
              objectFit: "contain",
            }}
          />

          <div className="flex flex-col items-end text-right gap-[20px] z-10">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-nohemi text-[#FAFAFA] font-[700] text-[32px] leading-tight whitespace-nowrap">
                Get Mentored & Supported
              </h2>
              <p className="font-outfit text-[#FAFAFA] text-[20px] font-[500] leading-snug">
                You're not learning alone.
              </p>
            </div>
            <p className="font-outfit text-[#FAFAFA] text-[16px] font-[400] max-w-[280px] leading-relaxed">
              Stuck or need feedback? SkillShikshya’s community of mentors and
              learners has your back with live support, interactive discussions,
              and expert insights. You’re never on your own.
            </p>
          </div>
        </div>

        <div className="relative bg-[#A88964] h-[341px] w-[592px] rounded-[30px] flex flex-col justify-center items-start pl-10 pr-[280px] ml-16 animate-box-floating">
          <div className="flex flex-col items-start text-left gap-[32px] z-10">
            <div className="flex flex-col gap-[10px]">
            <h2 className="font-nohemi text-[#FAFAFA] font-[700] text-[32px] leading-tight whitespace-nowrap">
  Achieve & Showcase
</h2>
              <p className="font-outfit text-[#FAFAFA] text-[20px] font-[500] leading-snug">
                Build your portfolio, get job-ready.
              </p>
            </div>
            <p className="font-outfit text-[#FAFAFA] text-[16px] font-[400] max-w-[280px] leading-relaxed">
              Your journey ends with achievement. Each completed project builds
              a portfolio showcasing your skills and job readiness, bringing you
              closer to that dream job, promotion, or your own venture.
            </p>
          </div>

          <img
            src={LaptopBoy}
            alt="Reading Guy"
            className="absolute right-[-20px] top-[10px] animate-floating"
            style={{
              width: "320px",
              height: "420px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstTask;
