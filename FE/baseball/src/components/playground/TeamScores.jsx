import React from "react";
import styled from "styled-components";

const TeamScores = ({ border, scoreInfomation }) => {
  const { teamName, totalScore, inningScore } = scoreInfomation;

  const inningScoreLength = inningScore.length - 1;

  const teamScores = fullInning.map((score, idx) => {
    if (idx <= inningScoreLength) {
      return <TeamScore key={idx}>{inningScore[idx]}</TeamScore>;
    } else {
      return <TeamScore key={idx}>-</TeamScore>;
    }
  });
  return (
    <TeamScoreWarp border={border}>
      <TeamName>{teamName}</TeamName>
      {teamScores}
      <ToTalScore>{totalScore}</ToTalScore>
    </TeamScoreWarp>
  );
};

const fullInning = ["", "", "", "", "", "", "", "", "", "", "", ""];

const TeamScoreWarp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 32.4%;
  background-color: var(--black);
  border-radius: ${(props) => (props.border ? "0px 0px 9px 9px" : "none")};
  color: var(--white);
`;

const TeamName = styled.div`
  text-align: center;
  width: 12.7%;
  height: 32.4%;
`;

const TeamScore = styled.div`
  width: 6%;
  height: 32.4%;
`;

const ToTalScore = styled.div`
  width: 6%;
  height: 32.4%;
`;

export default TeamScores;
