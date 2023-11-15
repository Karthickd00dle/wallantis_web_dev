import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const getDefaultTime = (start, end, direction) => {
  const suppliedProps = typeof (start && end) !== undefined;
  if (suppliedProps && start >= end) {
    return [start, end];
  } else if (suppliedProps && start < end) {
    return [start, start];
  }
  return [start || 60, end || 0];
};

const handleTime = (time, start, end, multiplier) => {
  multiplier =
    end + ((start - end) % multiplier) === time
      ? (start - end) % multiplier
      : multiplier;
  return time - multiplier;
};

const toMMSS = (secs) => {
  const sec_num = parseInt(secs, 10);
  const minutes = Math.floor(sec_num / 60) % 60;
  const seconds = sec_num % 60;

  return [minutes, seconds].map((v) => v.toString().padStart(2, "0")).join(":");
};

const useTimer = ({
  startTime,
  endTime,
  multiplier = 1,
  timeOut = 1000,
} = {}) => {
  const [start, end] = getDefaultTime(startTime, endTime);
  const [time, setTime] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > end) {
        setTime((prevTime) => {
          const updatedTime = prevTime - 1;
          return updatedTime < end ? end : updatedTime;
        });
      }
    }, timeOut);

    return () => {
      clearInterval(interval);
    };
  }, [time, end, timeOut]);

  const formattedTime = toMMSS(time);

  return [formattedTime, setTime];
};

useTimer.propTypes = {
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  multiplier: PropTypes.number,
  timeOut: PropTypes.number,
};

useTimer.defaultProps = {
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  multiplier: 1,
  timeOut: 1000,
};

export { useTimer };
