export interface Time {
  second: string;
  minute: string;
  hour: string;
  day: string;
}

export function clock(seconds: number): Time {
  const second = (seconds % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minute = Math.floor((seconds / 60) % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const hour = Math.floor((seconds / Math.pow(60, 2)) % 24).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    },
  );
  const day = Math.floor((seconds / Math.pow(60, 3)) % 365).toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    },
  );
  return { second, minute, hour, day };
}
