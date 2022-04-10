// import React, { useContext, useEffect, useState } from 'react';
// import Fade from 'react-reveal/Fade';
// import { Container, Row, Col } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
// import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

// const WorkEx = () => {
//   const { workex } = useContext(PortfolioContext);

//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 769) {
//       setIsDesktop(true);
//       setIsMobile(false);
//     } else {
//       setIsMobile(true);
//       setIsDesktop(false);
//     }
//   }, []);

// //   return (
// //     <section id="workex">
// //       <Container>
// //         <div className="project-wrapper">
// //           <Title title="Work experience" />
// //           {workex.map((workEach,index) => {
// //             const { title, info, info2, img } = workEach;

// //             return (
// //               <Row key={index}>
// //                 <Col lg={4} sm={12}>
// //                   <Fade
// //                     left={isDesktop}
// //                     bottom={isMobile}
// //                     duration={1000}
// //                     delay={500}
// //                     distance="30px"
// //                   >
// //                     <div className="project-wrapper__text">
// //                       <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
// //                       <div>
// //                         <p>
// //                           {info ||
// //                             'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
// //                         </p>
// //                         <p className="mb-4">{info2 || ''}</p>
// //                       </div>
// //                     </div>
// //                   </Fade>
// //                 </Col>
// //                 <Col lg={8} sm={12}>
// //                   <Fade
// //                     right={isDesktop}
// //                     bottom={isMobile}
// //                     duration={1000}
// //                     delay={1000}
// //                     distance="30px"
// //                   >
// //                     <div className="project-wrapper__image">
// //                           <div data-tilt className="thumbnail rounded">
// //                             <ProjectImg alt={title} filename={img} />
// //                           </div>
// //                     </div>
// //                   </Fade>
// //                 </Col>
// //               </Row>
// //             );
// //           })}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default WorkEx;
