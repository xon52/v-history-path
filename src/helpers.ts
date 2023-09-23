import type { Node } from './types'

export const getItemsPerRow = (rowWidth: number, itemGap: number, itemWidth: number) => {
  return Math.floor((rowWidth - 3 * itemGap) / (itemGap + itemWidth)) || 1
}

export const getNodes = (items: any[], itemsPerRow: number) => {
  // Count how many rows that many items per row will require
  const rowCount = Math.ceil(items.length / itemsPerRow)

  // Early return
  if (rowCount < 1) return []

  const nodes: Node[] = []
  // Iterate rows (r: row, d: direction, j:total items) to populate node collection
  for (let r = 0, d = 'right', j = 0; r < rowCount; r++, d = d === 'right' ? 'left' : 'right') {
    // Start each row with a row-start
    nodes.push({ type: `row-start`, dir: d })
    // For each itemPerRow, add the item, and an join; do not exceed the total number of items
    for (let i = 0; i < itemsPerRow && j < items.length; i++, j++) {
      nodes.push({ type: 'item', payload: items[r * itemsPerRow + i], dir: d })
      nodes.push({ type: `join`, dir: d })
    }
    // Re-assign the last row node to row-end
    nodes[nodes.length - 1] = { type: `row-end`, dir: d }
  }
  // Re-assign the first node to start
  nodes[0].type = 'start'
  // Re-assign the last node to end
  nodes[nodes.length - 1].type = 'end'

  return nodes
}
