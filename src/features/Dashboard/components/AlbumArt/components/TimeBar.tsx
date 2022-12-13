import React from "react";
import { TimeBarContainer, TimeBarProgression, TimeBarProgressionContainer, TimeContainer } from "./TimeBar.style"

export const TimeBar: React.FC = () => {
    const timeElapsed = 81;
    const timeTotal = 536;
    const timeElapsedString = '1:21';
    const timeTotalString = '18:56';
    const progressed = (timeElapsed/timeTotal)*100;

    const timeBar = React.useCallback(() => {
        return (
            <TimeBarContainer>
                <TimeContainer>{timeElapsedString}</TimeContainer>
                <TimeBarProgressionContainer>
                    <TimeBarProgression style={{ width: progressed + '%' }} />
                </TimeBarProgressionContainer>
                <TimeContainer>{timeTotalString}</TimeContainer>
            </TimeBarContainer>
        );
    },[progressed]);
    
    return timeBar();
}