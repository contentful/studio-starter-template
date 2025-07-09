import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";

import styles from "./ContactForm.module.css";

type ContactFormProps = {
  label: string;
  url: string;
  target: "_self" | "_blank";
  borderRadius: string;
  icon: "arrowRight" | "arrowLeft" | "chevronRight" | "chevronLeft";
};

const ICONS: Record<string, FC<any>> = {
  arrowRight: ArrowRightCircleIcon,
  arrowLeft: ArrowLeftCircleIcon,
  chevronRight: ChevronRightIcon,
  chevronLeft: ChevronLeftIcon,
};

export function ContactFormComponent({
  label,
  url,
  target,
  borderRadius,
  icon,
  ...props
}: ContactFormProps) {
  const Icon = icon ? ICONS[icon] : null;

  return (
    <form action="" method="POST" {...props}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className="w-full rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message for demo
        </label>
        <textarea
          rows={4}
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button className="bg-indigo-500 hover:shadow-form rounded-md py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
}
