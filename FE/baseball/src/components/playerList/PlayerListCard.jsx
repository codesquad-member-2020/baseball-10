import React from "react";
import styled from "styled-components";
import PlayerCard from "./PlayerCard";
import TotalCard from "./TotalCard";

const PlayerListCard = ({ playerInfo }) => {
  const infomationList = test_info_list.map((infoName) => <InfoItem>{infoName}</InfoItem>);
  const playerCards = playerInfo.players.map((playerInfo) => <PlayerCard playerInfo={playerInfo} />);
  const { totalAppearance, totalHit, totalOut } = playerInfo;
  return (
    <Card>
      <TeamName>{playerInfo.teamName}</TeamName>
      <CardWarp>
        <InfoList>{infomationList}</InfoList>
        {playerCards}
        <TotalCard totalAppearance={totalAppearance} totalHit={totalHit} totalOut={totalOut} />
      </CardWarp>
    </Card>
  );
};

const test_info_list = ["타자", "타석", "안타", "아웃", "평균"];

const Card = styled.div`
  width: 48%;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const CardWarp = styled.div`
  border-radius: var(--border-radius);
  border: solid var(--border-size) var(--gray-4);
  background-color: var(--black);
  height: 70vh;
  width: 100%;
`;

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-family: "Bold";
  font-size: var(--text-lg);
  color: var(--white);
  height: 8vh;
`;

const InfoList = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid var(--border-size) var(--gray-4);
  font-size: var(--text-base);
  color: var(--white);
  font-family: "Bold";
  width: 100%;
  background-color: var(--gray-3);
  height: 6vh;
`;

const InfoItem = styled.div`
  width: 25%;
  text-align: center;
`;

export default PlayerListCard;
