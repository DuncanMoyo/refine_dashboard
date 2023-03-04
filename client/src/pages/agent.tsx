import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const allAgents = data?.data ?? [];
  // console.log("🚀 ~ file: agent.tsx:11 ~ Agents ~ allAgents:", allAgents);


  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agents List
      </Typography>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allAgents.map(({_id, name, email, avatar, allProperties}) => (
              <AgentCard
                key={_id}
                id={_id}
                name={name}
                email={email}
                avatar={avatar}
                noOfProperties={allProperties.length}
              />
            ))}
      </Box>
    </Box>
  );
};

export default Agents;
