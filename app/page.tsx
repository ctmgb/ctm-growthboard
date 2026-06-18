

import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import FloatingButton from "@/components/layout/FloatingButton";
import PageContainer from "@/components/layout/PageContainer";

import ProspectPipeline from "@/components/crm/ProspectPipeline";
import FollowupCard from "@/components/crm/FollowupCard";
import ProspectCard from "@/components/crm/ProspectCard";

export default function CRMPage() {
  return (
    <>
      <Header />

      <PageContainer>
        <div className="space-y-5">
          {/* Page Title */}
          <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-5 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
              👥 CRM
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Prospect Command Center
            </h1>

            <p className="mt-2 text-sm opacity-90">
              Convert prospects into leaders through disciplined follow-up,
              registration, and activation.
            </p>
          </section>

          {/* Pipeline Summary */}
          <ProspectPipeline />

          {/* Due Follow-ups */}
          <FollowupCard />

          {/* Active Prospect List */}
          <ProspectCard />
        </div>
      </PageContainer>

      <FloatingButton />

      <BottomNav />
    </>
  );
}

