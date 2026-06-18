

// FILE: lib/genealogy.ts

/**
 * ============================================================
 * CTM GrowthBoard
 * Genealogy Utilities
 * ------------------------------------------------------------
 * Immutable genealogy helper functions implementing the frozen
 * CTM architecture.
 *
 * These utilities DO NOT modify genealogy. They only provide
 * read-only traversal, lookup, validation and branch helpers.
 * ============================================================
 */

export type BusinessIdType = "ID-1" | "ID-2" | "ID-3";

export interface GenealogyNode {
  memberId: string;
  businessId: BusinessIdType;

  sponsorId: string;
  placementParentId: string | null;

  leftChildId: string | null;
  rightChildId: string | null;

  level: number;

  panNumber?: string;
  memberName?: string;
}

/* ============================================================
   Basic Lookup
   ============================================================
 */

export function findNode(
  tree: GenealogyNode[],
  memberId: string
): GenealogyNode | undefined {
  return tree.find(
    (node) => node.memberId === memberId
  );
}

export function nodeExists(
  tree: GenealogyNode[],
  memberId: string
): boolean {
  return tree.some(
    (node) => node.memberId === memberId
  );
}

/* ============================================================
   Children
   ============================================================
 */

export function getLeftChild(
  tree: GenealogyNode[],
  memberId: string
): GenealogyNode | undefined {
  const node = findNode(tree, memberId);

  if (!node?.leftChildId) {
    return undefined;
  }

  return findNode(tree, node.leftChildId);
}

export function getRightChild(
  tree: GenealogyNode[],
  memberId: string
): GenealogyNode | undefined {
  const node = findNode(tree, memberId);

  if (!node?.rightChildId) {
    return undefined;
  }

  return findNode(tree, node.rightChildId);
}

/* ============================================================
   Placement Parent
   ============================================================
 */

export function getPlacementParent(
  tree: GenealogyNode[],
  memberId: string
): GenealogyNode | undefined {
  const node = findNode(tree, memberId);

  if (!node?.placementParentId) {
    return undefined;
  }

  return findNode(
    tree,
    node.placementParentId
  );
}

/* ============================================================
   Descendants
   ============================================================
 */

export function getDescendants(
  tree: GenealogyNode[],
  memberId: string
): GenealogyNode[] {
  const descendants: GenealogyNode[] = [];

  function traverse(id: string) {
    const current = findNode(tree, id);

    if (!current) {
      return;
    }

    if (current.leftChildId) {
      const left = findNode(
        tree,
        current.leftChildId
      );

      if (left) {
        descendants.push(left);
        traverse(left.memberId);
      }
    }

    if (current.rightChildId) {
      const right = findNode(
        tree,
        current.rightChildId
      );

      if (right) {
        descendants.push(right);
        traverse(right.memberId);
      }
    }
  }

  traverse(memberId);

  return descendants;
}

/* ============================================================
   Branch Counts
   ============================================================
 */

export function countLeftBranch(
  tree: GenealogyNode[],
  memberId: string
): number {
  const left = getLeftChild(tree, memberId);

  if (!left) {
    return 0;
  }

  return (
    1 +
    getDescendants(
      tree,
      left.memberId
    ).length
  );
}

export function countRightBranch(
  tree: GenealogyNode[],
  memberId: string
): number {
  const right = getRightChild(tree, memberId);

  if (!right) {
    return 0;
  }

  return (
    1 +
    getDescendants(
      tree,
      right.memberId
    ).length
  );
}

/* ============================================================
   Branch Health
   ============================================================
 */

export function getBranchDifference(
  tree: GenealogyNode[],
  memberId: string
): number {
  const left =
    countLeftBranch(tree, memberId);

  const right =
    countRightBranch(tree, memberId);

  return Math.abs(left - right);
}

export function isBalanced(
  tree: GenealogyNode[],
  memberId: string,
  tolerance = 1
): boolean {
  return (
    getBranchDifference(
      tree,
      memberId
    ) <= tolerance
  );
}

/* ============================================================
   Sponsor Helpers
   ============================================================
 */

export function getSponsoredMembers(
  tree: GenealogyNode[],
  sponsorId: string
): GenealogyNode[] {
  return tree.filter(
    (node) => node.sponsorId === sponsorId
  );
}

/* ============================================================
   Placement Validation
   ============================================================
 */

export function canAcceptLeftPlacement(
  node: GenealogyNode
): boolean {
  return node.leftChildId === null;
}

export function canAcceptRightPlacement(
  node: GenealogyNode
): boolean {
  return node.rightChildId === null;
}

/**
 * Read-only validation.
 * Frozen CTM rules prohibit manual movement.
 */
export function isPlacementImmutable(): boolean {
  return true;
}

/**
 * Frozen CTM rules permanently separate
 * Sponsor and Placement Parent.
 */
export function isSponsorPlacementSeparated(): boolean {
  return true;
}

/* ============================================================
   Tree Statistics
   ============================================================
 */

export function getTreeDepth(
  tree: GenealogyNode[],
  memberId: string
): number {
  const node = findNode(tree, memberId);

  if (!node) {
    return 0;
  }

  const left = node.leftChildId
    ? getTreeDepth(
        tree,
        node.leftChildId
      )
    : 0;

  const right = node.rightChildId
    ? getTreeDepth(
        tree,
        node.rightChildId
      )
    : 0;

  return 1 + Math.max(left, right);
}

export function getTreeSize(
  tree: GenealogyNode[],
  memberId: string
): number {
  return (
    1 +
    getDescendants(
      tree,
      memberId
    ).length
  );
}


