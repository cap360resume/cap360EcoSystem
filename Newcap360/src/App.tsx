import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WhatWeDo from "./pages/WhatWeDo.tsx";
import WhatWeThink from "./pages/WhatWeThink.tsx";
import WhoWeAre from "./pages/WhoWeAre.tsx";
import CareersPage from "./pages/Careers.tsx";
import NotFound from "./pages/NotFound.tsx";
import ASER from "./pages/services/ASER.tsx";
import HRCAMS from "./pages/services/HRCAMS.tsx";
import TCB from "./pages/services/TCB.tsx";
import PACE from "./pages/services/PACE.tsx";
import PerformanceManagement from "./pages/services/hrcams/PerformanceManagement.tsx";
import TotalRewards from "./pages/services/hrcams/TotalRewards.tsx";
import LabourLaw from "./pages/services/hrcams/LabourLaw.tsx";
import GenAIHR from "./pages/services/hrcams/GenAIHR.tsx";
import OrgDesign from "./pages/services/hrcams/OrgDesign.tsx";
import ManagedHR from "./pages/services/hrcams/ManagedHR.tsx";
// TCB sub-pages
import LeadershipDevelopment from "./pages/services/tcb/LeadershipDevelopment.tsx";
import InnovationDesignThinking from "./pages/services/tcb/InnovationDesignThinking.tsx";
import SoftSkillsTraining from "./pages/services/tcb/SoftSkillsTraining.tsx";
import SalesCustomerExcellence from "./pages/services/tcb/SalesCustomerExcellence.tsx";
import LearningExperienceDesign from "./pages/services/tcb/LearningExperienceDesign.tsx";
import BehavioralMindsetTraining from "./pages/services/tcb/BehavioralMindsetTraining.tsx";
// ASER sub-pages
import CompetencyAssessments from "./pages/services/aser/CompetencyAssessments.tsx";
import AssessmentCentres from "./pages/services/aser/AssessmentCentres.tsx";
import PsychometricTesting from "./pages/services/aser/PsychometricTesting.tsx";
import TalentAnalytics from "./pages/services/aser/TalentAnalytics.tsx";
// PACE sub-pages
import CareerPathArchitecture from "./pages/services/pace/CareerPathArchitecture.tsx";
import ProfessionalCoaching from "./pages/services/pace/ProfessionalCoaching.tsx";
import RoleAlignment from "./pages/services/pace/RoleAlignment.tsx";
import SuccessionPlanning from "./pages/services/pace/SuccessionPlanning.tsx";
import CareerTransition from "./pages/services/pace/CareerTransition.tsx";
import IndividualDevelopment from "./pages/services/pace/IndividualDevelopment.tsx";
import ReinventWithPACE from "./pages/services/pace/ReinventWithPACE.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-think" element={<WhatWeThink />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/careers" element={<CareersPage />} />
          {/* Service pages */}
          <Route path="/what-we-do/services/aser" element={<ASER />} />
          <Route path="/what-we-do/services/hrcams" element={<HRCAMS />} />
          <Route path="/what-we-do/services/tcb" element={<TCB />} />
          <Route path="/what-we-do/services/pace" element={<PACE />} />
          {/* HRCAMS sub-pages */}
          <Route path="/what-we-do/services/hrcams/performance-management" element={<PerformanceManagement />} />
          <Route path="/what-we-do/services/hrcams/total-rewards" element={<TotalRewards />} />
          <Route path="/what-we-do/services/hrcams/labour-law" element={<LabourLaw />} />
          <Route path="/what-we-do/services/hrcams/gen-ai-hr" element={<GenAIHR />} />
          <Route path="/what-we-do/services/hrcams/org-design" element={<OrgDesign />} />
          <Route path="/what-we-do/services/hrcams/managed-hr" element={<ManagedHR />} />
          {/* TCB sub-pages */}
          <Route path="/what-we-do/services/tcb/leadership-development" element={<LeadershipDevelopment />} />
          <Route path="/what-we-do/services/tcb/digital-upskilling" element={<InnovationDesignThinking />} />
          <Route path="/what-we-do/services/tcb/soft-skills-training" element={<SoftSkillsTraining />} />
          <Route path="/what-we-do/services/tcb/sales-customer-excellence" element={<SalesCustomerExcellence />} />
          <Route path="/what-we-do/services/tcb/learning-experience-design" element={<LearningExperienceDesign />} />
          <Route path="/what-we-do/services/tcb/behavioral-mindset-training" element={<BehavioralMindsetTraining />} />
          {/* ASER sub-pages */}
          <Route path="/what-we-do/services/aser/competency-assessments" element={<CompetencyAssessments />} />
          <Route path="/what-we-do/services/aser/assessment-centres" element={<AssessmentCentres />} />
          <Route path="/what-we-do/services/aser/psychometric-testing" element={<PsychometricTesting />} />
          <Route path="/what-we-do/services/aser/talent-analytics" element={<TalentAnalytics />} />
          {/* PACE sub-pages */}
          <Route path="/what-we-do/services/pace/career-path-architecture" element={<CareerPathArchitecture />} />
          <Route path="/what-we-do/services/pace/professional-coaching" element={<ProfessionalCoaching />} />
          <Route path="/what-we-do/services/pace/role-alignment" element={<RoleAlignment />} />
          <Route path="/what-we-do/services/pace/succession-planning" element={<SuccessionPlanning />} />
          <Route path="/what-we-do/services/pace/career-transition" element={<CareerTransition />} />
          <Route path="/what-we-do/services/pace/individual-development" element={<IndividualDevelopment />} />
          <Route path="/what-we-do/services/pace/reinvent" element={<ReinventWithPACE />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
