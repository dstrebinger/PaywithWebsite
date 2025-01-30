{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs29\fsmilli14667 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document.addEventListener("DOMContentLoaded", function () \{
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0const sections = document.querySelectorAll("section");
\f1\fs24 \strokec2 \
\

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0function fadeInSections() \{
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0sections.forEach(section => \{
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0const sectionPos = section.getBoundingClientRect().top;
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0const windowHeight = window.innerHeight;
\f1\fs24 \strokec2 \
\

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0if (sectionPos < windowHeight - 100) \{
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0section.style.opacity = "1";
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0section.style.transform = "translateY(0)";
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\}
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\});
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0\}
\f1\fs24 \strokec2 \
\

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0window.addEventListener("scroll", fadeInSections);
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \'a0\'a0\'a0\'a0fadeInSections(); // Run on page load
\f1\fs24 \strokec2 \

\f0\fs29\fsmilli14667 \strokec2 \});
\f1\fs24 \strokec2 \
\
}