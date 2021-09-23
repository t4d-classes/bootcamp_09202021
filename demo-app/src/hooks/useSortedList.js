import { useState } from 'react';

import { useList } from "./useList";

const itemsSort = (items, sortCol, sortDir) => {

  return [ ...items ].sort((a,b) => {
    if (a[sortCol] === b[sortCol]) {
      return 0;
    } else {
      if (a[sortCol] < b[sortCol]) {
        return sortDir === 'asc' ? -1 : 1;
      } else {
        return sortDir === 'desc' ? -1 : 1;
      }
    }
  });

};

export const useSortedList = (initialItems) => {

  const [ items, appendItem, replaceItem, updateItem, removeItem ] = useList(initialItems);

  const [ sortCol, setSortCol ] = useState('id');
  const [ sortDir, setSortDir ] = useState('asc');

  const sortOnColumn = (nextSortCol) => {
    if (nextSortCol === sortCol) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(nextSortCol);
      setSortDir('asc');
    };
  };

  return [
    itemsSort(items, sortCol, sortDir), { col: sortCol, dir: sortDir },
    appendItem, replaceItem, updateItem, removeItem, sortOnColumn, 
  ];


};