import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AboutUs from './Components/AboutUs';
import Careers from './Components/Careers';
import CaseStudy from './Components/CaseStudy';
import ChooseUS from './Components/ChooseUS';
import ContactUS from './Components/ContactUS';
import CustomeSoftware from './Components/CustomeSoftware';
import DevOpsServices from './Components/DevOpsServices';
import DiscoveryWorkshopServices from './Components/DiscoveryWorkshopServices';
import EmbeddedSoftwareDevelopment from './Components/EmbeddedSoftwareDevelopment';
import Home from './Components/Home';
import MobileAppDevelopmentServices from './Components/MobileAppDevelopmentServices';
import PrivacyPolicy from './Components/PrivacyPolicy';
import QATestingServices from './Components/QATestingServices';
import AWSConsultingServices from './Components/Service-Solutions/AWSConsultingServices';
import BusinessProcessOutsourcingservices from './Components/Service-Solutions/BusinessProcessOutsourcingservices';
import CloudMigrationServices from './Components/Service-Solutions/CloudMigrationServices';
import CyberSecurityServices from './Components/Service-Solutions/CyberSecurityServices';
import MulesoftConsultingServices from './Components/Service-Solutions/MulesoftConsultingServices';
import SalesforceConsultingServices from './Components/Service-Solutions/SalesforceConsultingServices';
import ServicenowConsultingServices from './Components/Service-Solutions/ServicenowConsultingServices';
import ShopifyDevelopmentServices from './Components/Service-Solutions/ShopifyDevelopmentServices';
import ARVRServices from './Components/Service-Technologies/ARVRServices';
import BlockchainConsultingServices from './Components/Service-Technologies/BlockchainConsultingServices';
import DataScienceConsultingServices from './Components/Service-Technologies/DataScienceConsultingServices';
import ELearningServices from './Components/Service-Technologies/ELearningServices';
import HealthCareServices from './Components/Service-Technologies/HealthCareServices';
import IOTServices from './Components/Service-Technologies/IOTServices';
import RoboticProcessAutomationServices from './Components/Service-Technologies/RoboticProcessAutomationServices';
import ServiceDetails from './Components/ServiceDetails';
import Services from './Components/Services';
import TermCondition from './Components/Term-Condition';
import UIUXServices from './Components/UIUXServices';
import WebDevelopmentService from './Components/WebDevelopmentServices';
function RouteNavigation() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/choose-us" element={<ChooseUS />} />
      {/* Services Routes */}
      <Route path="/services" element={<Services />} />
      <Route path="/custome-software" element={<CustomeSoftware />} /> 
      <Route path="/web-development-software" element={<WebDevelopmentService />} /> 
      <Route path="/mobile-app-development-software" element={<MobileAppDevelopmentServices />} /> 
      <Route path="/quality-assurance-and-testing-services" element={<QATestingServices />} /> 
      <Route path="/ui-ux-services" element={<UIUXServices />} /> 
      <Route path="/embedded-software-development" element={<EmbeddedSoftwareDevelopment />} /> 
      <Route path="/devops-services" element={<DevOpsServices />} /> 
      <Route path="/discovery-workshop-services" element={<DiscoveryWorkshopServices />} /> 
      <Route path="/services-detail" element={<ServiceDetails />} />
      {/* Services Solutions */}
      <Route path="/sales-force-consulting" element={<SalesforceConsultingServices />} />
      <Route path="/servicenow-consulting-services" element={<ServicenowConsultingServices />} />
      <Route path="/mulesoft-consulting-services" element={<MulesoftConsultingServices />} />
      <Route path="/aws-consulting-services" element={<AWSConsultingServices />} />
      <Route path="/cyber-security-services" element={<CyberSecurityServices />} />
      <Route path="/business-process-outsourcing-services" element={<BusinessProcessOutsourcingservices />} />
      <Route path="/cloud-migration-services" element={<CloudMigrationServices />} />
      <Route path="/shopify-development-services" element={<ShopifyDevelopmentServices />} />
      <Route path="/data-science-consulting-services" element={<DataScienceConsultingServices />} />
      <Route path="/blockchain-consulting-services" element={<BlockchainConsultingServices />} />
      <Route path="/internet-of-things-iot-services" element={<IOTServices />} />
      <Route path="/augmented-reality-virtual-reality-services" element={<ARVRServices />} />
      <Route path="/robotic-process-automation-services" element={<RoboticProcessAutomationServices />} />
      <Route path="/e-learning-software-development-services" element={<ELearningServices />} />
      <Route path="/healthcare-software-development-services" element={<HealthCareServices />} />
      
      <Route path="/case-studies" element={<CaseStudy />} />
      <Route path="/contact" element={<ContactUS/>} />


      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-condition" element={<TermCondition />} />
      
    </Routes>
  </Router>
  )
}

export default RouteNavigation