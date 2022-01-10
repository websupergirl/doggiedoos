import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import ScoopForEnvironment from "../pages/ScoopForEnvironment";
import ScoopForHealth from "../pages/ScoopForHealth";

import PetWasteRemoval from "../pages/PetWasteRemoval";
import LitterCleanup from "../pages/LitterCleanup";
import DogWalking from "../pages/DogWalking";
import PetCare from "../pages/PetCare";
import CatSitting from "../pages/CatSitting";
import DogSitting from "../pages/DogSitting";
import BathingGrooming from "../pages/BathingGrooming";
import Obedience from "../pages/Obedience";

import TheTeam from "../pages/TheTeam";
import Faq from "../pages/Faq";
import Media from "../pages/Media";
import Testimonials from "../pages/Testimonials";

import BookService from "../pages/BookService";
import Specials from "../pages/Specials";
import ContactUs from "../pages/ContactUs";
import PayBill from "../pages/PayBill";

const DdadRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="scoop-for-environment" element={<ScoopForEnvironment />} />
        <Route path="scoop-for-health" element={<ScoopForHealth />} />
        <Route path="pet-waste-removal" element={<PetWasteRemoval />} />
        <Route path="litter-cleanup" element={<LitterCleanup />} />
        <Route path="dog-walking" element={<DogWalking />} />
        <Route path="pet-care" element={<PetCare />} />
        <Route path="cat-sitting" element={<CatSitting />} />
        <Route path="dog-sitting" element={<DogSitting />} />
        <Route path="bathing-grooming" element={<BathingGrooming />} />
        <Route path="obedience" element={<Obedience />} />
        <Route path="the-team" element={<TheTeam />} />
        <Route path="faq" element={<Faq />} />
        <Route path="media" element={<Media />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="book-service" element={<BookService />} />
        <Route path="specials" element={<Specials />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="pay-bill" element={<PayBill />} />
      </Routes>
    </>
  );
};

export default DdadRoutes;
