import illuWomanDesktop from "../assets/illustration-woman-online-desktop.svg";
import illuWomanMobile from "../assets/illustration-woman-online-mobile.svg";
import illuBox from "../assets/illustration-box-desktop.svg";
import Accordion from "./Accordion";

const FaqAccordionCard = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* card */}
      <div className="flex lg:flex-row flex-col lg:static relative bg-white bg-[url('../assets/bg-pattern-mobile.svg')] lg:bg-[url('../assets/bg-pattern-desktop.svg')] lg:bg-cover bg-no-repeat lg:bg-[-45rem_-24rem] bg-top lg:w-[920px] w-[330px] lg:h-[510px] h-[535px] rounded-3xl lg:overflow-hidden mt-24">
        <div className="flex flex-auto flex-col relative lg:left-[-85px] lg:top-20 lg:scale-100 scale-75 top-[-145px]">
          <picture>
            <source srcSet={illuWomanDesktop} media="(min-width: 1024px)" />
            <img src={illuWomanMobile} alt="illustration woman" />
          </picture>
        </div>
        <div className="absolute lg:flex flex-auto left-[13.9rem] top-[25rem] hidden">
          <img src={illuBox} alt="illustration box desktop" />
        </div>

        {/* faq container */}
        <div className="relative flex flex-auto flex-col gap-7 lg:left-[-100px] lg:top-0 top-[-110px] box-border lg:w-[345px] lg:mt-20 lg:pl-16 text-c-darkGrayishBlue">
          <div className="lg:text-left text-center">
            <h1 className="uppercase font-bold text-4xl text-c-veryDarkDesaturatedBlue">
              faq
            </h1>
          </div>
          <div className="relative flex flex-col divide-y gap-5 lg:px-0 px-8 overflow-auto">
            <div>
              <Accordion
                title="How many team members can i invite?"
                content="You can invite up to 2 additional users on the Free plan. There is no limit on 
                team members for the Premium plan."
              />
            </div>
            <div>
              <Accordion
                title="What is the maximum file upload size?"
                content="No more than 2GB. All files in your account must fit your allotted storage space."
              />
            </div>
            <div>
              <Accordion
                title="How do i reset my password?"
                content="Click “Forgot password” from the login page or “Change password” from your profile page.
                A reset link will be emailed to you."
              />
            </div>
            <div>
              <Accordion
                title="Can i cancel my subscription?"
                content="Yes! Send us a message and we’ll process your request no questions asked."
              />
            </div>
            <div>
              <Accordion
                title="Do you provide additional support?"
                content="Chat and email support is available 24/7. Phone lines are open during normal business hours."
              />
            </div>
            <div>
              <div className="invisible">space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionCard;
