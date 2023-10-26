# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## STEP 01 - Initializing project using VITE
>>> npm create vite@latest ./ -- --template react
Ok to proceed? (y) y

installing few packages before running the project

for tailwind css  :- https://tailwindcss.com/docs/installation
npm install -D tailwindcss
npx tailwindcss init

Here we are using flag as --legacy-peer-deps while installing because we are using older version of "react-tilt"
below are the packages
--@react-three/fiber  - react based ejs library
react-tilt - provide cool animations
maath  -  to make solutions for complex problems

The packages you are installing using npm install are used in web development with React for various purposes. Here's a brief overview of each package's use:

--@react-three/fiber:

This package is part of the React Three Fiber library and provides a declarative way to work with 3D graphics in React applications. It allows you to create and manipulate 3D scenes and objects.
--@react-three/drei:

Also part of React Three Fiber, drei is a collection of useful abstractions and helpers for building 3D scenes with React. It simplifies common 3D tasks and provides components for lighting, camera controls, and more.
maath:

It's not a widely recognized package, and its purpose depends on its specific functionality. It might be a custom or project-specific package.
react-tilt:

--react-tilt is a package that provides a React wrapper for the Tilt.js library. It enables the creation of tilt-based interactions, allowing elements to respond to mouse movements by tilting in a 2D or 3D space.
react-vertical-timeline-component:

This package helps you build vertical timelines in your React applications. It's often used to display a sequence of events or activities in a chronological order.
--@emailjs/browser:

This package allows you to send email messages using JavaScript. It can be used in React applications to send emails from the client-side. Note that you'll need to configure it with your email service provider.
framer-motion:

--framer-motion is a popular animation library for React. It provides an easy way to create animations and transitions in your web applications. You can use it to add fluid and interactive animations to your React components.
react-router-dom:

--react-router-dom is the React Router library, which is widely used for routing in React applications. It enables you to set up and manage the navigation and routing of your single-page applications (SPAs).
Each of these packages serves a specific purpose in web development and can enhance the functionality and interactivity of your React applications. Depending on your project requirements, you can leverage these packages to create 3D scenes, animations, email functionality, timelines, routing, and more.

Now to run web 
>> npm run dev

for email services log in to -> https://dashboard.emailjs.com

