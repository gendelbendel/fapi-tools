export const isObjectEmpty = (objectName: object) => {
  return Object.keys(objectName).length === 0;
};

interface ObjectWithID {
  ID: number;
}

/**
 * const idSortOrder = [10, 3, 4, 1];
 *
 * const objectsToSort = [{ ID: 1 }, { ID: 3 }, { ID: 4 }, { ID: 10 }];
 *
 * = [{ ID: 10 }, { ID: 3 }, { ID: 4 }, { ID: 1 }]
 */
export const sortObjectsById = (
  idSortOrder: Array<number>,
  objectsToSort: Array<ObjectWithID>
) => {
  return objectsToSort.sort((a, b) => {
    const idA = a.ID;
    const idB = b.ID;

    const indexA = idSortOrder.indexOf(idA);
    const indexB = idSortOrder.indexOf(idB);

    if (indexA === -1) {
      return 1; // Place elements not found in idSortOrder at the end
    } else if (indexB === -1) {
      return -1; // Place elements not found in idSortOrder at the end
    }

    return indexA - indexB;
  });
};
