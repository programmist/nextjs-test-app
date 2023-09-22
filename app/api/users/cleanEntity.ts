const manadatoryKeys = ["hashedPassword"];

export function cleanEntity<T extends Object>(
  entity: T,
  keys: string[] = []
): T {
  return cleanEntities([entity], keys)[0];
}

export function cleanEntities<T extends Object>(
  entities: T[],
  keys: string[] = []
): T[] {
  const allKeys = [...manadatoryKeys, ...keys];
  return entities.map((entity) =>
    Object.fromEntries(
      Object.entries(entity).filter(([key]) => !allKeys.includes(key))
    )
  ) as T[];
}
