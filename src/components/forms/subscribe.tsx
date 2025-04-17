"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SubscribeForm() {
  const [data, setData] = React.useState({
    email: "",
    lastName: "",
    firstName: "",
    confirm: false,
  });

  const isValid = Object.values(data).every((value) => value);
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-80 flex-none gap-4 p-4 bg-cyan-600 flex flex-col"
    >
      <header className="w-full flex flex-col gap-2 text-white">
        <h4 className="text-xl capitalize">stay informed</h4>
        <span className="self-end text-sm">* Required fields</span>
      </header>

      <div className="w-full flex flex-col gap-2">
        <input
          required
          type="email"
          value={data.email}
          placeholder="* Your email"
          className="w-full rounded-md bg-white p-4 py-2"
          onChange={(ev) => setData({ ...data, email: ev.target.value })}
        />
        <input
          required
          type="text"
          value={data.firstName}
          placeholder="* Your first name"
          className="w-full rounded-md bg-white p-4 py-2"
          onChange={(ev) => setData({ ...data, firstName: ev.target.value })}
        />
        <input
          required
          type="text"
          value={data.lastName}
          placeholder="* Your last name"
          className="w-full rounded-md bg-white p-4 py-2"
          onChange={(ev) => setData({ ...data, lastName: ev.target.value })}
        />
      </div>

      <footer className="w-full flex flex-col text-white items-start gap-2">
        <span className="flex gap-2 text-sm items-start">
          <input
            type="checkbox"
            checked={data.confirm}
            onChange={(ev) => setData({ ...data, confirm: ev.target.checked })}
          />
          <span>
            * you confirm that you&apos;ve read our{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              privacy policy
            </a>
          </span>
        </span>

        <button
          disabled={!isValid}
          className="border z-10 border-current cursor-pointer disabled:cursor-not-allowed px-6 py-2 relative transition-all hover:text-black hover:border-transparent before:-z-10 before:bg-white before:top-0 before:left-0 before:h-full before:w-0 before:transition-all before:absolute hover:before:w-full"
        >
          <span className="text-current flex items-center gap-2 z-10">
            I register
            <FaArrowRight className=" text-current transition-all" />
          </span>
        </button>
      </footer>
    </form>
  );
}
