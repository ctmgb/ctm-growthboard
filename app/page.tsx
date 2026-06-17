

import Header from "@/components/layout/Header";
import PageContainer from "@/components/layout/PageContainer";
import BottomNav from "@/components/layout/BottomNav";
import FloatingButton from "@/components/layout/FloatingButton";

import AICoach from "@/components/dashboard/AICoach";
import ProgressCard from "@/components/dashboard/ProgressCard";
import PoleCard from "@/components/dashboard/PoleCard";
import MissionCard from "@/components/dashboard/MissionCard";
import TaskList from "@/components/dashboard/TaskList";
import ExecutiveScore from "@/components/dashboard/ExecutiveScore";

export default function Home() {
  return (
    <>
      <Header />

      <PageContainer>
        <div className="space-y-4">
          <AICoach />

          <TaskList />

          <ProgressCard />

          <PoleCard />

          <MissionCard />

          <ExecutiveScore />
        </div>
      </PageContainer>

      <FloatingButton />

      <BottomNav />
    </>
  );
}

