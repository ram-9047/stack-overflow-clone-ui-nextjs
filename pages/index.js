import React from "react";
import Layout from "../components/Layout";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        "https://cdn.sstatic.net/Img/home/illo-feats-ask.svg?v=6567bb5f5ed3",
        "https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=8d9bf76769f6",
        "https://cdn.sstatic.net/Img/home/illo-feats-answer.svg?v=47f40d6129e9",
        "https://cdn.sstatic.net/Img/home/illo-feats-tags.svg?v=f7ab3b74f6f9",
        "https://cdn.sstatic.net/Img/home/illo-feats-accept.svg?v=7d803fc6f70a",
        "https://cdn.sstatic.net/Img/home/illo-feats-recognize.svg?v=6e057d298453"
      ],
      para: [
        "Ask a question publicly on 170+ Stack Exchange sites or privately using Stack Overflow for Teams.",
        "Upvoting helps exceptional content rise to the top and bring awareness to useful responses.",
        "Answer a question to share your knowledge with the world or in private with your team.",
        "Tags help make information searchable and find answers that are important to you.",
        "Accept the answer which solved your problem to let others benefit from the valuable information.",
        "Our reputation system rewards both the new & experienced based on contribution and activity."
      ],
      activeIndex: 0
    };
  }
  handleOnClick = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    return (
      <Layout>
        <div className=" h-full w-screen">
          <div className="">
            <div className="absolute bg-custom-yellow">
              <img
                className="relative"
                src="https://cdn.sstatic.net/img/home/illo-hero-full.svg?v=e2018a5f9272"
                alt="stackoverflow"
              />
            </div>
            <div className="items-center container w-8/12 mx-40 relative pt-20">
              <div className="ml-40">
                <h3 className=" static text-center text-black ml-10 text-6xl">
                  We 3 people who code
                </h3>
              </div>

              <p className="text-black ml-64 w-2/3 text-center text-2xl">
                We build products that empower developers and connect them to
                solutions that enable productivity, growth, and discovery.
              </p>
              <div className="flex ml-56 mt-4">
                <button className="ml-40 border border-red-500 box-border px-8 py-2 bg-white text-red-500 outline-none">
                  For developers
                </button>

                <button className="ml-8 relative  box-border px-8 py-2 text-white bg-orange-550 outline-none">
                  For businesses
                </button>
              </div>
            </div>
          </div>

          <div className="text-center relative mt-40">
            <h2 className="text-black text-5xl ">
              For developers, by developers
            </h2>
            <div className=" pb-4">
              <div className="">
                <div className=" m-auto w-20 h-2 bg-orange-550"></div>
              </div>
            </div>
            <div className=" mt-4">
              <p className="text=black w-6/12 m-auto">
                Stack Overflow is an{" "}
                <span className="text-orange-550">open community</span> for
                anyone that codes. We help you get answers to your toughest
                coding questions, share knowledge with your coworkers in
                private, and find your next dream job.
              </p>
            </div>
            <div className="flex content-center mx-4 px-12 mt-8">
              {/* this is one div */}
              <div className="content-center mt-24 w-1/2 m-8 py-8 px-4 shadow-xl hover:shadow-2xl">
                <div className="box-border">
                  <div className="mx-20">
                    <img
                      src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"
                      alt="public Q&A logo"
                    />
                  </div>
                  <h4 className="text-2xl my-4">Public Q & A</h4>
                  <p className="mb-4">
                    Get answers to more than 16.5 million questions and give
                    back by sharing your knowledge with others.{" "}
                    <span className="text-orange-450">Sign up</span> for an
                    account.
                  </p>
                  <button className="border bg-blue-700 box-border px-8 py-4 text-white">
                    Browse Wuestions
                  </button>
                </div>
              </div>
              {/* uptop this */}
              {/* this is one div */}
              <div className="content-center mb-24 w-1/2 m-8 shadow-xl hover:shadow-2xl py-8 px-4">
                <div className="box-border">
                  <div className="mx-20">
                    <img
                      src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7"
                      alt="public Q&A logo"
                    />
                  </div>
                  <h4 className="text-2xl my-4">Private Q & A</h4>
                  <p className="mb-4">
                    Level up with Stack Overflow while you work. Share knowledge
                    privately with your coworkers using our flagship Q&A engine.
                  </p>
                  <button className="border bg-orange-450 box-border px-8 py-4 text-white">
                    Try for free
                  </button>
                </div>
              </div>
              {/* uptop this */}
              {/* this is one div */}
              <div className="content-center mt-24 w-1/2 m-8 shadow-xl hover:shadow-2xl py-8 px-4">
                <div className="box-border">
                  <div className="mx-20">
                    <img
                      src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee"
                      alt="public Q&A logo"
                    />
                  </div>
                  <h4 className="text-2xl my-4">Browse jobs</h4>
                  <p className="mb-4">
                    Find the right job through high quality listings and search
                    for roles based on title, technology stack, salary,
                    location, and more.
                  </p>
                  <button className="border bg-blue-700 box-border px-8 py-4 text-white">
                    Find a job
                  </button>
                </div>
              </div>
              {/* uptop this */}
            </div>
          </div>

          <div className="bg-pink-white-100 z-10 pt-24 pb-20  text-center content-center">
            <h2 className="text-black text-5xl text-center">
              For developers, by developers
            </h2>
            <div className=" ml-56 block pb-4">
              <div className="ml-64">
                <div className=" ml-48  w-20 h-2 bg-orange-450"></div>
              </div>
            </div>
            <div className="ml-32 mt-4">
              <p className="text=black w-6/12 ml-64">
                Our mission is to help developers write the script of the
                future. This means helping you find and hire skilled developers
                for your business and providing them the tools they need to
                share knowledge and work effectively.
              </p>
            </div>
            <div className="flex justify-around mt-16 pb-8 w-11/12 ml-12">
              {/* from this */}

              <div className="flex py-10 px-4 w-1/3 shadow-xl hover:shadow-2xl bg-white mr-4 ">
                <img
                  src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e"
                  alt="private-question-image"
                  className="w-20 h-20"
                />
                <p className="my-2 w-2/3">
                  Quickly find and share internal knowledge with{" "}
                  <span className="text-orange-450 cursor-pointer">
                    {" "}
                    Private Q&A
                  </span>
                </p>
              </div>
              {/* upto this */}
              <div className="flex py-10 px-4 w-1/3 shadow-xl hover:shadow-2xl bg-white mr-4 ">
                <img
                  src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
                  alt="private-question-image"
                  className="w-20 h-20"
                />
                <p className="my-2 w-2/3">
                  Find the perfect candidate for your growing technical team
                  with
                  <span className="text-orange-450 cursor-pointer">
                    {" "}
                    Talent solutions
                  </span>
                </p>
              </div>
              {/* upto this */}
              <div className="flex py-10 px-4 w-1/3 shadow-xl hover:shadow-2xl bg-white mr-4 ">
                <img
                  src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
                  alt="private-question-image"
                  className="w-20 h-20"
                />
                <p className="my-2 w-2/3">
                  Accelerate the discovery of your products or services through
                  our
                  <span className="text-orange-500 cursor-pointer">
                    {" "}
                    Advertising platform
                  </span>
                </p>
              </div>
              {/* uptop this */}
            </div>
          </div>

          {/* texting */}

          <div className="bg-blue-C pt-32 pb-16">
            <div className="text-center relative">
              <div className="justify-around">
                <h2 className="text-white text-4xl ">
                  Unlock siloed knowledge with Stack Overflow for Teams
                </h2>
              </div>
              <div className=" ml-64 block pb-4">
                <div className="ml-64">
                  <div className=" ml-48  w-20 h-2 bg-orange-550"></div>
                </div>
              </div>
              <div className="ml-40 mt-4">
                <p className="text-white w-6/12 ml-64">
                  Wikis, chat messages, or formal documentation for knowledge
                  management aren’t effective. Our question and answer format is
                  a proven approach for accessing the right information in less
                  time.
                </p>
              </div>
              <button className="bg-orange-450 text-center ml-12 mt-4 px-4 py-2 text-white">
                Learn more
              </button>
              <div className="flex content-center px-4 mt-4">
                {/* this is one div */}
                <div className=" bg-white rounded-md mt-32 w-2/3 m-8 py-8 shadow-xl hover:shadow-2xl">
                  <div className="box-border">
                    <div className="mx-20">
                      <h4 className="text-blue-C text-2xl">Basic</h4>
                    </div>
                    <span className="text-xm">
                      Private knowledge base for teams
                    </span>
                    <div className="bg-gray-300 mt-4 w-full h-px"></div>
                    <div className="flex">
                      <div className="text-5xl mt-4 ml-4"> $5</div>
                      <div className="w-48 text-xs mt-8 -ml-2">
                        per teammate / month billed annually
                      </div>
                    </div>
                    <div className="text-left mt-3">
                      <p className="flex content-start">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Free 30 day trial</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span className=" w-64">
                          Your own private space hosted on stackoverflow.com
                        </span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Fully searchable archive</span>
                      </p>
                    </div>
                    <div>
                      <button className="bg-gray-200 mt-4 text-blue-C text-m px-24 font-semibold py-2 rounded-md hover:bg-gray-400">
                        Get started for free
                      </button>
                    </div>
                  </div>
                </div>
                {/* uptop this */}
                {/* this is one div */}
                <div className="content-center bg-white mt-20 rounded-md w-2/3 m-8 py-8 shadow-xl hover:shadow-2xl">
                  <div className="box-border">
                    <div className="mx-20">
                      <h4 className="text-blue-C text-2xl">Business</h4>
                    </div>
                    <span className="text-xm">
                      Private knowledge base with SSO and premium features
                    </span>
                    <div className="bg-gray-300 mt-4 w-full h-px"></div>
                    <div className="flex">
                      <div className="text-5xl mt-4 ml-4"> $12</div>
                      <div className="w-48 text-xs mt-8 -ml-2">
                        per teammate / month billed annually
                      </div>
                    </div>
                    <div className=" mt-8">
                      <p className="flex content-start">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>All the features of Basic</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Single sign-on (SSO) with SAML</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Reporting and analytics</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Priority customer support</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>99.5% uptime</span>
                      </p>
                    </div>
                    <div>
                      <button className="bg-gray-200 mt-4 text-blue-C text-m px-24 font-semibold py-2 rounded-md hover:bg-gray-400">
                        Request a demo
                      </button>
                    </div>
                  </div>
                </div>
                {/* uptop this */}
                {/* this is one div */}
                <div className="content-center text-white border rounded-md w-2/3 m-8 py-8 shadow-xl hover:shadow-2xl">
                  <div className="box-border">
                    <div className="mx-20">
                      <h4 className=" text-2xl">Enterprise</h4>
                    </div>
                    <div className="mx-8 mt-2">
                      <span className="text-xm  border-box">
                        Standalone knowledge base with enhanced security and
                        flexible hosting
                      </span>
                    </div>
                    <div className="bg-gray-300 mt-4 w-full h-px"></div>
                    <h2 className="-ml-48 mt-4 text-2xl">Custom Pricing</h2>
                    <div className=" mt-4 mr-12 text-left ">
                      <p className="flex ">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>
                          Host on your cloud or servers – or our private managed
                          cloud
                        </span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Single sign-on with AD or SAML</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>Robust read and write API</span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>
                          Your own customer success and community building
                          representative
                        </span>
                      </p>
                      <p className="flex">
                        <img
                          src="https://static.thenounproject.com/png/317777-200.png"
                          alt="tick-logo"
                          className="h-4 ml-4 w-4 mt-1 mr-2"
                        />
                        <span>99.5% uptime SLA and priority support</span>
                      </p>
                    </div>
                    <div>
                      <button className="bg-custom-yellow hover:bg-yellow-600 mt-8 text-blue-C text-m px-24 font-semibold py-2 rounded-md hover:bg-gray-400">
                        Request a demo
                      </button>
                    </div>
                  </div>
                </div>
                {/* uptop this */}
              </div>
              <div className="flex justify-center  text-white-900">
                <div className="flex text-white cursor-pointer">
                  <img
                    src="https://cdn.sstatic.net/Img/teams/endorsements/g2.svg?v=670bf9279910"
                    alt="..."
                  />
                  <strong className="mx-2">Laeder</strong> Fall 2019
                </div>
                <div className="flex text-white mx-12 cursor-pointer">
                  <img
                    src="https://cdn.sstatic.net/Img/teams/endorsements/g2.svg?v=670bf9279910"
                    alt="..."
                  />
                  <strong className="mx-2">Users love us</strong>
                </div>
                <div className="flex text-white cursor-pointer">
                  <img
                    src="https://cdn.sstatic.net/Img/teams/endorsements/fastco.svg?v=5ebc802a76c7"
                    alt="..."
                  />
                  <strong className="mx-2">Most Innovative Companies</strong>{" "}
                  2019
                </div>
              </div>
            </div>
          </div>
          {/* upto this */}

          <div className="bg-pink-white-100">
            <div className="flex ml-48  py-24 w-4/5">
              <div className="ml-4">
                <img
                  src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
                  width="76"
                />
                <h4 className="text-3xl py-2 font-bold">
                  Hire your technical talent
                </h4>
                <p>
                  We help expand your technical hiring strategy to promote your
                  employer brand and highlight relevant open roles to our
                  community of 50 million monthly visitors.
                </p>
                <div className="mt-4 px-4 -pl-2 bg-orange-550 w-48 rounded-sm py-2 text-white">
                  <a href="https://stackoverflow.com/talent" className="">
                    Stack Overflow Talent
                  </a>
                </div>
              </div>
              <div className=" mr-8">
                <img
                  src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
                  width="76"
                />
                <h4 className="text-3xl py-2 font-bold">
                  Reach developers worldwide
                </h4>
                <p>
                  Use the world’s largest resource for people who code to help
                  you increase awareness and showcase your product or service
                  across Stack Overflow’s network of Q&A sites.
                </p>
                <div className="mt-4 px-4 -pl-2 bg-orange-550 w-56 rounded-sm py-2 text-white">
                  <a href="https://stackoverflow.com/talent" className="">
                    Stack Overflow Advertising
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-8">
              <h2 className="text-3xl font-bold text-center py-4">
                Questions are everywhere, answers are on Stack Overflow
              </h2>
              <div className="bg-orange-550 rounded-sm m-auto h-2 w-20"></div>
            </div>
            <div className="flex justify-center">
              <div>
                <div
                  onClick={() => this.handleOnClick(0)}
                  id="one"
                  className="flex hover:shadow-2xl cursor-pointer rounded-lg w-64 py-3"
                >
                  <img
                    src="https://cdn.sstatic.net/Img/home/ask-a-question.svg?v=2573b7282ac8"
                    alt="ask-question-logo"
                    className="h-12 w-12 ml-2"
                  />
                  <button className="mt-1 ml-2">Ask a question</button>
                </div>
                <div
                  onClick={() => this.handleOnClick(1)}
                  className="flex cursor-pointer hover:shadow-2xl rounded-lg p-4"
                >
                  <img
                    src="https://cdn.sstatic.net/Img/home/votes.svg?v=989b3861569f"
                    alt="ask-question-logo"
                    className="h-12 w-12 -ml-2"
                  />
                  <span className="mt-3 ml-2 ">Vote on everything</span>
                </div>
                <div
                  onClick={() => this.handleOnClick(2)}
                  className="flex hover:shadow-2xl cursor-pointer rounded-lg p-4"
                >
                  <img
                    src="https://cdn.sstatic.net/Img/home/answer.svg?v=801dab051d61"
                    alt="ask-question-logo"
                    className="h-12 w-12 "
                  />
                  <span className="mt-3 ml-2 ">Answers question</span>
                </div>
              </div>
              {/* main content */}
              <div className="w-4/12">
                <img
                  src={this.state.images[this.state.activeIndex]}
                  alt="logo"
                />
                <p className="text-center text-xl py-8">
                  {this.state.para[this.state.activeIndex]}
                </p>
              </div>
              {/* main content over */}
              <div>
                <div
                  onClick={() => this.handleOnClick(3)}
                  className="flex hover:shadow-2xl rounded-lg cursor-pointer p-4"
                >
                  <img
                    src="https://cdn.sstatic.net/Img/home/tags.svg?v=f17cc81570e9"
                    alt="ask-question-logo"
                    className="h-12 w-16"
                  />
                  <span className="mt-3 ml-2 ">Tag your question</span>
                </div>
                <div
                  onClick={() => this.handleOnClick(4)}
                  className="flex hover:shadow-2xl rounded-lg cursor-pointer p-4"
                >
                  <img
                    src="https://cdn.sstatic.net/Img/home/accept.svg?v=4e52852c80b1"
                    alt="ask-question-logo"
                    className="h-12 w-16"
                  />
                  <span className="mt-3 ml-2">Accept an answer</span>
                </div>
                <div
                  onClick={() => this.handleOnClick(5)}
                  className="flex hover:shadow-2xl rounded-lg cursor-pointer p-4"
                >
                  <img
                    src="https://cdn.sstatic.net/Img/home/get-recognized.svg?v=934301e7c620"
                    alt="ask-question-logo"
                    className="h-12 w-16"
                  />
                  <span className="mt-3 ml-2 ">Get recognized</span>
                </div>
              </div>
            </div>
            <div className="text-center mb-48">
              <button className="bg-orange-550 text-white text-m py-2 px-4 rounded-md">
                Create an account
              </button>
            </div>
          </div>
          <div>
            <div className="my-8">
              <h2 className="text-3xl font-bold text-center py-4">
                Learn and grow with Stack Overflow
              </h2>
              <div className="bg-orange-550 rounded-sm m-auto h-2 w-20"></div>
            </div>
            <div className="flex mx-16 mb-32 w-11/12">
              <div className="px-8 w-full">
                <img
                  src="https://cdn.sstatic.net/Img/home/developer.svg?v=cd5e5a0ec97c"
                  alt="logo"
                />
                <h4 className="text-lg py-4 font-bold">
                  Write the script of the future
                </h4>
                <p>
                  Get your coding questions answered to learn, build, and level
                  up whether you’re beginning with{" "}
                  <span className="text-indigo-900">JavaScript</span> or a{" "}
                  <span className="text-indigo-900">React </span>
                  professional.
                </p>
              </div>
              <div className="px-4 w-full">
                <img
                  src="https://cdn.sstatic.net/Img/home/open-source.svg?v=e025bc1244c8"
                  alt="logo"
                />
                <h4 className="text-lg py-4 font-bold">Support open source</h4>
                <p>
                  Reach users of your project by following tags, answering
                  newcomer questions, and empowering experts in the community.
                  Read the curl project creator’s story. professional.
                </p>
              </div>
              <div className="px-4 w-full">
                <img
                  src="https://cdn.sstatic.net/Img/home/advocate.svg?v=a91ad6d1a9bd"
                  alt="logo"
                />
                <h4 className="text-lg py-4 font-bold">
                  Acquire and share knowledge
                </h4>
                <p>
                  Answer questions and gain insights from an audience of
                  developers using your technology on Stack Overflow.
                </p>
              </div>
              <div className="px-4 w-full">
                <img
                  src="https://cdn.sstatic.net/Img/home/career-switcher.svg?v=b42e46ffdac0"
                  alt="logo"
                />
                <h4 className="text-lg py-4 font-bold">
                  Find career opportunities
                </h4>
                <p>
                  Create a profile that shows off your expertise and credentials
                  to help you make your next move. Start your Developer Story.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 pt-24 pb-40 pl-16">
            <h2 className="text-3xl font-bold">Looking for a job?</h2>
            <div className="flex  mr-16 mt-8">
              <div className="">
                <button className="flex bg-white rounded-md px-3 py-4 w-64 mr-8">
                  <img
                    src="https://cdn.sstatic.net/Img/home/jobs-tech.svg?v=42f011c01763"
                    alt="test"
                    className="h-16 w-16"
                  />
                  <div className="m-auto">Browse jobs by technology</div>
                </button>
              </div>
              <div className="">
                <button className="flex bg-white rounded-md px-3 py-4  mr-8">
                  <img
                    src="https://cdn.sstatic.net/Img/home/jobs-salary.svg?v=401840ff8931"
                    alt="test"
                    className="h-16 w-16"
                  />
                  <div className="m-auto px-2">Browse jobs by salary</div>
                </button>
              </div>
              <div className="">
                <button className="flex bg-white rounded-md px-3 py-4 w-64 mr-8">
                  <img
                    src="https://cdn.sstatic.net/Img/home/jobs-visa.svg?v=1f3acc6dc772"
                    alt="test"
                    className="h-16 w-16"
                  />
                  <div className="m-auto">Browse jobs by visa sponsorship</div>
                </button>
              </div>
              <div className="">
                <button className="flex bg-white rounded-md px-3 py-4 w-64">
                  <img
                    src="https://cdn.sstatic.net/Img/home/jobs-remote.svg?v=a4b4d1b5a80c"
                    alt="test"
                    className="h-16 w-16"
                  />
                  <div className="m-auto"> Browse remote-friendly jobs</div>
                </button>
              </div>
              <div className="m-auto">
                <button className="bg-orange-550 px-4 py-2 rounded-md">
                  View all jobs
                </button>
              </div>
            </div>
            <div className="w-16 h-16 absolute right-0 mt-24 mr-8">
              <img
                src="https://cdn.sstatic.net/Img/home/robot.svg?v=dfa16a330cbd"
                alt="robot"
                className=""
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
({
  /* <h2 className="text-center text-3xl mt-20">Sign Up</h2>
      <div className="text-center cursor-pointer">
        <span className="text-xs ml20  text-yellow-600">
          <Link href="/signin">Already have account</Link>
        </span>
      </div>

      <form className="w-2/4 items-center  content-around ml-64 ">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 ">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Rock Hobbs"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-username"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-username"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form> */
});
//     </div>
//   </Layout>

export default Index;
