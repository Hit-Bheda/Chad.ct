import React,{ useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Main, Search, SearchIn, SearchImg, Active, ActiveText, UserImg, UserContainer, ContactContainer } from "./chat.style";
import Contact from "../Contact";

gsap.registerPlugin(ScrollTrigger);
const Chat = () => {
  const containerRef = useRef(null);

  const handleWheel = (event) => {
    const container = containerRef.current;
    const delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
    const scrollAmount = delta * 30; // Adjust scrolling speed

    gsap.to(container, {
      scrollLeft: container.scrollLeft + scrollAmount,
      duration: 0.2, // Adjust duration as needed
      ease: "power2.out" // Adjust easing as needed
    });
    event.preventDefault();
  };
  return(
    <>
      <Main>
        <Search>
            <SearchIn></SearchIn>
            <SearchImg></SearchImg>
        </Search>
        <Active>
          <ActiveText>Active Now</ActiveText>
          <UserContainer ref={containerRef} onWheel={handleWheel}>
            <UserImg></UserImg>
            <UserImg></UserImg>
            <UserImg></UserImg>
            <UserImg></UserImg>
          </UserContainer>
        </Active>
        <ContactContainer>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          
          <Contact/>
          <Contact/>
          <Contact/>
        </ContactContainer>
      </Main> 
    </>
  )
}
export default Chat;
