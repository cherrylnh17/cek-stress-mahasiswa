import React from 'react';

export default function Question({ questionData, value, onChange }) {
  const { id, question, type, min, max } = questionData;

  if (type === 'range') {
    return (
      <div className="mb-2.5">
        <label className="font-bold">{question}</label><br />
        <div className="flex flex-col justify-evenly mt-2">
          {questionData.nilaiRange?.map(({ value: val, label }) => (
            <label key={val} className="block">
              <input
                type="radio"
                name={id}
                value={val}
                checked={value === val}
                onChange={() => onChange(id, val)}
                className="mr-2"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'boolean') {
    return (
      <div className="mb-2.5">
        <label className="font-bold">{question}</label><br />
        <div className="flex gap-3 mt-2">
          <label>
            <input
              type="radio"
              name={id}
              value={0}
              checked={value === 0}
              onChange={() => onChange(id, 0)}
            /> Tidak
          </label>
          <label>
            <input
              type="radio"
              name={id}
              value={1}
              checked={value === 1}
              onChange={() => onChange(id, 1)}
            /> Ya
          </label>
        </div>
      </div>
    );
  }

  return null;
}
