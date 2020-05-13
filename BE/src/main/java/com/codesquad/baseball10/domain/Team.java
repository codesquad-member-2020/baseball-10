package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Embedded;

import java.util.List;

@Getter
@ToString
public class Team {
    @Id
    private Long id;
    private String name;
    private String logo;
    @Embedded.Nullable
    private User user;
    private String selected;
    private List<Player> players;
    private String role;
    private String totalScore;
    private String totalPa;
    private String totalHit;
    private String totalOut;
    private String currentOrder;
    private String pitchCount;
    private List<TeamOneInningInfo> teamOneInningInfos;
//    private List<TeamOneMatchInfo> teamOneMatchInfos;
}