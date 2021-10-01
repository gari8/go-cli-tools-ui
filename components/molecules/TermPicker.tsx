import React, { useState } from "react";
import { DateRangePicker } from "react-dates";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import styled from "styled-components";

interface Props {
  startedAt: Date;
  setStartedAt: (date: Date) => void;
  updatedAt: Date;
  setUpdatedAt: (date: Date) => void;
}

const StyledDatePickerWrapper = styled.div`
  .DateRangePickerInput__withBorder {
    border-radius: var(--chakra-radii-md);
    padding: 1.5px 12px 1.5px 8px;
  }

  .DateInput_input {
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    width: 100px;
  }

  .DateRangePickerInput_calendarIcon {
    margin: 0;
  }

  .CalendarDay__highlighted_calendar span.highlighted {
    background: #8db909;
    border-radius: 50%;
    padding: 8px 10px;
    color: #fff;
  }
`;

export default function TermPicker({
  startedAt,
  updatedAt,
  setStartedAt,
  setUpdatedAt,
}: Props) {
  const [focusedInput, setFocusedInput] = useState<
    "startDate" | "endDate" | null
  >(null);

  return (
    <>
      <StyledDatePickerWrapper>
        <DateRangePicker
          startDate={startedAt}
          startDateId="startDateId"
          endDate={updatedAt}
          endDateId="endDateId"
          focusedInput={focusedInput}
          keepOpenOnDateSelect={true}
          onFocusChange={setFocusedInput}
          onDatesChange={(selectedDates) => {
            setStartedAt(selectedDates.startDate);
            setUpdatedAt(selectedDates.endDate);
          }}
          initialVisibleMonth={() => moment().add(-1, "months")}
          isOutsideRange={(e) => {
            return moment() < e;
          }}
          showDefaultInputIcon
          maxDate={moment()}
          small
          enableOutsideDays={true}
          isDayHighlighted={(e) => moment().dayOfYear() === e.dayOfYear()}
          hideKeyboardShortcutsPanel
        />
      </StyledDatePickerWrapper>
    </>
  );
}
