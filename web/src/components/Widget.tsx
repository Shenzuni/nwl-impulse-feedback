import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from  '@headlessui/react'; 
import { WidgetForm } from './WidgetForm';
export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end">
      <Popover.Panel>
          <WidgetForm></WidgetForm>
      </Popover.Panel>
      <Popover.Button onClick={toggleWidgetVisibility} className=" bg-violet-500 text-white rounded-full flex items-center px-3 h-12 group">
        <ChatTeardropDots className="w-6 h-6"></ChatTeardropDots>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}