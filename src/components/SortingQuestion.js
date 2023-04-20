import { useEffect, useState } from "react";

function SortingQuestion({ id, prompt, required, options, onSort }) {
  const [sortedOptions, setSortedOptions] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    shuffleOptions();
  }, []);

  const shuffleOptions = () => {
    const shuffledOptions = [...options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [
        shuffledOptions[j],
        shuffledOptions[i],
      ];
    }
    setSortedOptions(shuffledOptions);
  };

  const handleOptionMove = (index, direction) => {
    if (index + direction < 0 || index + direction >= sortedOptions.length) {
      return;
    }

    const newOptions = [...sortedOptions];
    [newOptions[index], newOptions[index + direction]] = [
      newOptions[index + direction],
      newOptions[index],
    ];

    setSortedOptions(newOptions);
    setIsSorted(false);
  };

  const handleSort = () => {
    const isListSorted = JSON.stringify(options) === JSON.stringify(sortedOptions);
    setIsSorted(isListSorted);
    onSort(sortedOptions, id);
  };

  return (
    <div>
      <p>{prompt}</p>
      <ul>
        {sortedOptions.map((option, index) => (
          <li key={option.id}>
            {option.text}
            <button onClick={() => handleOptionMove(index, -1)}>▲</button>
            <button onClick={() => handleOptionMove(index, 1)}>▼</button>
          </li>
        ))}
      </ul>
      {isSorted !== null && (
        <p>{isSorted ? 'Correct!' : 'Incorrect.'}</p>
      )}
      <button onClick={handleSort}>Sort</button>
    </div>
  );
}

export default SortingQuestion;
