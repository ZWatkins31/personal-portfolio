import React from "react";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { motion, useScroll, useInView } from "framer-motion";
import {
  fadeIn,
  EaseInRight,
  EaseInLeft,
  ScaleUp,
} from "../utilities/animations";
import cinema from "../assets/images/cinema.png";
import reservations from "../assets/images/reservations.png";
import comments from "../assets/images/comments.png";
import stocks from "../assets/images/stocks.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id="projects" initial="initial" animate="animate">
      <Container>
        <ScaleUp>
          <h2>PROJECTS</h2>
        </ScaleUp>
        <div className="proj-card">
          <EaseInRight>
            <div className="proj-info">
              <h3>Restaurant Reservations</h3>
              <p>
                Full-stack application designed to help a restaurant handle
                customer reservations. The app has the functionality to create,
                edit, and seat reservations at certain created tables with
                specific capacity limits.
              </p>
              <div className="proj-tech">
                <div>JavaScript</div>
                <div>React</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>Node.js</div>
                <div>Express</div>
                <div>PostreSQL</div>
                <div>Vercel</div>
              </div>
              <div className="proj-btn">
                <button>Git Hub</button>
                <button>Deployed App</button>
              </div>
            </div>
          </EaseInRight>
          <EaseInLeft>
            <div className="proj-img">
              <img src={reservations} alt="reservations" />
            </div>
          </EaseInLeft>
        </div>
        <div className="proj-card">
          <EaseInRight>
            <div className="proj-info">
              <h3>Cinema Hub</h3>
              <p>
                Front-end movie booking application that allows users to choose
                from a selection of movies in a movie theater.
              </p>
              <p>
                Users can select a movie and reserve seats that are unoccupied,
                choose to view the app in light/dark mode, view the number of
                seats and total admission fees for the movie that they select.
              </p>
              <div className="proj-tech">
                <div>JavaScript</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>Vercel</div>
              </div>
              <div className="proj-btn">
                <button>Git Hub</button>
                <button>Deployed App</button>
              </div>
            </div>
          </EaseInRight>
          <EaseInLeft>
            <div className="proj-img">
              <img src={cinema} alt="cinema" />
            </div>
          </EaseInLeft>
        </div>
        <div className="proj-card">
          <EaseInRight>
            <div className="proj-info">
              <h3>Stock Watcher</h3>
              <p>
                Front-end application that allows a user to search for stock
                data fetched from an API, add/remove these stocks to a dashboard
                watchlist, click on watchlist stocks to view more detailed
                information.
              </p>
              <div className="proj-tech">
                <div>JavaScript</div>
                <div>React</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>FinnHub API</div>
                <div>Vercel</div>
              </div>
              <div className="proj-btn">
                <button>Git Hub</button>
                <button>Deployed App</button>
              </div>
            </div>
          </EaseInRight>
          <EaseInLeft>
            <div className="proj-img">
              <img src={stocks} alt="stocks" />
            </div>
          </EaseInLeft>
        </div>
        <div className="proj-card">
          <EaseInRight>
            <div className="proj-info">
              <h3>Let's Comment!</h3>
              <p>
                Full-stack application that lets users create posts, comment on
                existing posts, and edit/reply/like comments.
              </p>
              <div className="proj-tech">
                <div>JavaScript</div>
                <div>React</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>Node.js</div>
                <div>Express</div>
                <div>PostreSQL</div>
                <div>Vercel</div>
              </div>
              <div className="proj-btn">
                <button>Git Hub</button>
                <button>Deployed App</button>
              </div>
            </div>
          </EaseInRight>
          <EaseInLeft>
            <div className="proj-img">
              <img src={comments} alt="comments" />
            </div>
          </EaseInLeft>
        </div>
      </Container>
    </motion.section>
  );
};

export default Projects;
