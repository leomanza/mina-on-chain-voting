import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { proposalIdAtom, useProposalResults } from 'common/store';

import { PageLayout, ResultsOverview, ResultsTable, VotingPeriod, VotingResults } from 'components/v1';

import { useHydrateAtoms } from 'jotai/react/utils';

type ProposalResultsPageProps = {
  id: string;
};

export const getServerSideProps = async (context: GetServerSidePropsContext<ProposalResultsPageProps>) => {
  const proposalIdParam = context.params?.id;
  const proposalId = Number(proposalIdParam);

  if (!proposalIdParam || isNaN(proposalId)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      proposalId,
    },
  };
};

const ProposalResultsPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useHydrateAtoms([[proposalIdAtom, props.proposalId]]);
  const [proposal] = useProposalResults();

  return (
    <PageLayout title={proposal.title ? `${proposal.key}: ${proposal.title}` : undefined}>
      <ResultsOverview />
      <VotingPeriod startTime={proposal.start_time} endTime={proposal.end_time} />
      <VotingResults
        total={proposal.total_stake_weight}
        positive={proposal.positive_stake_weight}
        negative={proposal.negative_stake_weight}
      />
      <ResultsTable {...{ votes: proposal.votes, totalStakeWeight: proposal.total_stake_weight }} />
    </PageLayout>
  );
};

export default ProposalResultsPage;