import { Children, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion one",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam temporibus rem quas. Tempore asperiores dignissimos quod error! Itaque, soluta accusamus!",
  },
  {
    id: 2,
    title: "Accordion two",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam temporibus rem quas. Tempore asperiores dignissimos quod error! Itaque, soluta accusamus!",
  },
  {
    id: 3,
    title: "Accordion three",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam temporibus rem quas. Tempore asperiores dignissimos quod error! Itaque, soluta accusamus!",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} setOpen={setOpen} open={open}>
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open, children }) {
  const isOpen = item.id === open;
  
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setOpen(item.id)}>
        <div>{item.title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.3s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{children} </div>
    </div>
  );
}
