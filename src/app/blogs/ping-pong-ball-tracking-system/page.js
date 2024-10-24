// src/app/blogs/self-hosting/page.js
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from 'next/image';

const SelfHostingPage = () => {
  const commonTextStyle = "text-sky-400 text-left md:text-justify";

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box>
        <Link href="/blogs" passHref>
          <ArrowBackIcon
            sx={{
              color: "white",
              cursor: "pointer",
              "&:hover": {
                color: "#fae263",
              },
              position: "absolute",
              left: "0rem",
              marginTop: "1rem",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
        </Link>
        <div>
          <p
            className={`${commonTextStyle} text-2xl font-bold underline decoration-4`}
          >
            Ping-Pong ball tracking system
          </p>
          <p className={`${commonTextStyle} italic opacity-90 text-sm`}>
            28th Oct 2024, 5 min read
          </p>
        </div>
      </Box>

      <p className={commonTextStyle}>
        I work as a software developer, research assistant at Wilson college of
        textiles at NC State, & this project is in collaboration with Dr. Warren
        Jasper.
      </p>

      <Box
        sx={{
          maxWidth: { xs: "90%", md: "600px" },
          borderRadius: "12px",
          overflow: "hidden",
          margin: "0 auto",
          minHeight: "215px",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/_IoQ6Dux8g8?si=uCX2zliGSLllFJTB"
          allow="accelerometer; clipboard-write; encrypted-media"
          title="YouTube video player"
          style={{
            width: "100%",
            height: "215px",
            border: "none",
          }}
        />
      </Box>

      <div className="flex flex-col items-center">
        <p className={`${commonTextStyle} text-white`}>
          Youtube video showing live demo, of integrating hosting with CI/CD.
        </p>
      </div>
      <div>
  <ul className="text-sky-500">
    <li>
      <Link href="#understanding-the-project">
        <span>1. </span><span className="underline">Understanding the project</span>
      </Link>
    </li>
    <li>
      <Link href="#motivation">
        <span>2. </span><span className="underline">Motivation</span>
      </Link>
    </li>
    <li>
      <Link href="#traditional-way">
        <span>3. </span><span className="underline">Traditional way</span>
      </Link>
    </li>
    <li>
      <Link href="#our-method">
        <span>4. </span><span className="underline">Our method</span>
      </Link>
      <ul style={{ paddingLeft: '20px' }}>
        <li>
          <Link href="#calibration">
            <span>4.1 </span><span className="underline">Calibration</span>
          </Link>
        </li>
        <li>
          <Link href="#bt-and-dc">
            <span>4.2 </span><span className="underline">Ball tracking and distance calculation</span>
          </Link>
        </li>
        <li>
          <Link href="#challenges-faced">
            <span>4.3 </span><span className="underline">Challenges we faced</span>
          </Link>
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <Link href="#real-time">
                <span>4.3.1 </span><span className="underline">Hardware limitation for processing in real-time</span>
              </Link>
            </li>
            <li>
              <Link href="#not-track-ball">
                <span>4.3.2 </span><span className="underline">Speed and shape of ball made it impossible to track ball</span>
              </Link>
            </li>
            <li>
              <Link href="#shape-of-ball">
                <span>4.3.3 </span><span className="underline">Ball not being <em>ball</em> shaped</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#coordinates-to-distance">
            <span>4.4 </span><span className="underline">Coordinates to actual distance</span>
          </Link>
        </li>
      </ul>
    </li>
  </ul>
</div>



      <p
        id="understanding-the-project"
        className={`${commonTextStyle} text-xl font-bold`}
      >
        1. Understanding the project:-
      </p>
      <p className={`${commonTextStyle}`}>
        Calculating the distance at which ball is going to have its first point
        of contact with the ground after being launched using a catapult.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/objective.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>Hi</p>
      </div>

      <p id="motivation" className={`${commonTextStyle} text-xl font-bold`}>
        2. Motivation:-
      </p>
      <p className={`${commonTextStyle}`}>
        The reason behind doing this project is for data modeling that is to
        collect training data so it could later be used by machine learning
        regression models.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/table.jpg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>Hi</p>
      </div>

      <p
        id="traditional-way"
        className={`${commonTextStyle} text-xl font-bold`}
      >
        3. Traditional way:-
      </p>

      <p className={`${commonTextStyle}`}>
        Lay an aluminum foil in the expected area where the ball is going to
        land for particular configuration, launch the ball, identify the dent on
        the foil, and calculate the distance using the measuring tape which has
        been placed in parallel with the foil.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/traditional.jpg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>Hi</p>
      </div>

      <p className={`${commonTextStyle}`}>
        This is a tedious process, and takes a lot of time. Two man job, Not
        feasible when sampling for 10000 data points.
      </p>

      <p id="our-method" className={`${commonTextStyle} text-xl font-bold`}>
        4. Our method:-
      </p>

      <p className={`${commonTextStyle}`}>
        Using a raspberry pi with HD camera mounted on it, powered by a power
        bank, can be operated using a remote desktop making the system very
        mobile. Place raspberry pi camera as shown in the picture below:-
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/traditional.jpg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>Hi</p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/r_setup.jpg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Remote desktop in the Pi and run the program:- python3 main.py
        </p>
      </div>

      <p id="calibration" className={`${commonTextStyle} text-lg font-bold`}>
        4.1. Calibration:-
      </p>

      <p className={`${commonTextStyle}`}>
        Place a ruler scale:- Align the scale with green and red line, and get
        the value on the tape on inches respectively.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/calib_window.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Here the value are:- green value (mid_value) = 112 Red value
          (minimum_value) = 84
        </p>
      </div>

      <p id="bt-and-dc" className={`${commonTextStyle} text-lg font-bold`}>
        4.2. Ball tracking and distance calculation:-
      </p>

      <p className={`${commonTextStyle}`}>
        So after weeks of research, trials and errors, after losing all hope and
        were almost about to scrap the project, my professor came up with a
        brilliant idea. Background separations:- So what we do is We take the
        first frame, convert it to b&w, and for each frame we take the absolute
        difference with this bg_image.
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <Image
            src="/images/ping-pong-ball-tracking-system/base_frame.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>Raw footage</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/ping-pong-ball-tracking-system/bg_seperation.gif"
            alt="Description of image"
            className="rounded-lg max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            Background seperation
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/ping-pong-ball-tracking-system/ball_tracked.png"
            alt="Description of image"
            className="rounded-lg max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>Ball tracked</p>
        </div>

        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <Image
            src="/images/ping-pong-ball-tracking-system/distance_output.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            Estimated distance
          </p>
        </div>
      </div>

      <p
        id="challenges-faced"
        className={`${commonTextStyle} text-lg font-bold`}
      >
        4.3 Challenges we faced:-
      </p>

      <p className={`${commonTextStyle} text font-bold`}>
        4.3.1 Hardware limitation for processing in real-time
      </p>
      <p className={`${commonTextStyle}`}>
        We actually initially wanted to do this in real-time, but because of
        hard-ware limitations, the pi was not able to process the frames as soon
        as it was getting it.
      </p>

      <p className={`${commonTextStyle}`}>
        So we decided to use post-processing, that is first record the video,
        store the frames in a buffer, and process each frame one by one.
      </p>

      <p id="not-track-ball" className={`${commonTextStyle} text font-bold`}>
        4.3.2 Speed and shape of ball made it impossible to track ball
      </p>

      <p className={`${commonTextStyle}`}>
        The second problem we faced was, ball was moving at a very high pace,
        that is was visible maybe for 1-3 frames, and the program was not able
        to do any object detection,
      </p>
      <p className={`${commonTextStyle}`}>
        So we even tried using a plain dark color background, covered using a
        cloth, but nonetheless because of how small and fast the ball was, the
        program was not able to track it.
      </p>
      <p className={`${commonTextStyle}`}>
        So after weeks of research, trials and errors, after losing all hope and
        were almost about to scrap the project, my professor came up with a
        brilliant idea.
      </p>

      <div className="bg-white/80 p-2 rounded-lg shadow-md border-l-4 border-blue-500">
        <h1 className="text-xl font-semibold text-blue-500">Important:</h1>
        <p className="text-base text-gray-800">
          - Now there is one caveat in here, when we are shooting the ball,
          there should be no movement in the background, that is the background
          could be cluttered, does not matter, but there should not be a moving
          object in the frame, because then it would be captured by the absolute
          difference.
        </p>
      </div>

      <p id="shape-of-ball" className={`${commonTextStyle} text font-bold`}>
        4.3.3 Ball not being <em>ball</em> shaped
      </p>

      <p className={`${commonTextStyle}`}>
        When the ball travels at a faster pace, in a particular frame, it
        appears to have a deformed shape, more like a <em>comet</em>.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/comet_shape.jpeg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Here the value are:- green value (mid_value) = 112 Red value
          (minimum_value) = 84
        </p>
      </div>

      <p className={`${commonTextStyle}`}>
        So no existing articles, blogs or open cv functions which detect objects
        helped us.
      </p>

      <p className={`${commonTextStyle}`}>
        https://pyimagesearch.com/2015/09/14/ball-tracking-with-opencv/
      </p>
      <p className={`${commonTextStyle}`}>
        This article gave us a good starting point, but was not able to track
        the ball because of how fast the ball was moving and the ball losing its
        shape, and the ball was only available for 1-3 frames.
      </p>
      <p className={`${commonTextStyle}`}>
        So that is where we decided to actually just detect the contours in the
        image subtracted, get the area of the contour and if it is 100px, and the
        aspect ratio 3, that is its more of oval shape than boxier shape, then
        draw a circle around it, and start tracking its coordinates of the
        center.
      </p>
      <p className={`${commonTextStyle}`}>
        As you can see in this particular frame, its not circle, but a deformed
        shape, which was quite challenging to track, but because of not tracking
        circle, but tracking contours and having threshold of area and aspect
        ratio, we were able to draw around the contour and mark a circle around
        it and get the center coordinates.
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/ping-pong-ball-tracking-system/comet_in_gif_1.png"
            alt="Description of image"
            className="rounded-lg max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            Ball shaped like amoeba
          </p>
        </div>

        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <Image
            src="/images/ping-pong-ball-tracking-system/comet_in_gif_2.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>Less ameba</p>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/ping_track.gif"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>Hi</p>
      </div>

      <p id="coordinates-to-distance" className={`${commonTextStyle} text-lg font-bold`}>
        4.4. Coordinates to actual distance
      </p>

      <p className={`${commonTextStyle}`}>
        Now that you have understood how we have the center coordinates of the
        ball, but how to get the distance from it.
      </p>

      <p className={`${commonTextStyle}`}>
        Now here is where the calibration part comes into the picture.
      </p>

      <p className={`${commonTextStyle}`}>
        We have x, y coordinates of the circle with respect to the open cv
        window.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/distance_relative_1.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Here the value are:- green value (mid_value) = 112 Red value
          (minimum_value) = 84
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/distance_relative_2.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Here the value are:- green value (mid_value) = 112 Red value
          (minimum_value) = 84
        </p>
      </div>

      <p className={`${commonTextStyle}`}>
        Using above two pictures, 640 pixels == 56 inches Therefore, each pixel
        has = 0.0875 inches Now the coordinates are:- 223 px, 263 px Therefore,
        the ball is 223 * 0.0875 = 19.5125 inches
      </p>
      <p className={`${commonTextStyle}`}>
        We have x, y coordinates of the circle with respect to the open cv
        window.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <Image
          src="/images/ping-pong-ball-tracking-system/distance_relative_4.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Here the value are:- green value (mid_value) = 112 Red value
          (minimum_value) = 84
        </p>
      </div>

      <p className={`${commonTextStyle}`}>
        So the distance, from origin is, 84 + 19.512 = 103.5125 inches, so you
        can see in the output screenshot above.
      </p>
    </Box>
  );
};

export default SelfHostingPage;
