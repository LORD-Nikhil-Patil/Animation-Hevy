import { useEffect, useState } from "react";

export const scrollObserver = (id) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(()=>{
              setVisible(true);
            },0)
          } else {
            setTimeout(()=>{
              setVisible(false);
            },1000)
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    const element = document.querySelector(`#${id}`);
    if (element) {
      observer.observe(element);
    }
  }, []);

  return visible;
};
