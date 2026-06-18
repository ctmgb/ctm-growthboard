

// FILE: services/sheets.ts

"use client";

/**
 * ============================================================
 * CTM GrowthBoard
 * Google Sheets Service Layer
 * ------------------------------------------------------------
 * This service provides strongly typed wrappers around the
 * Google Apps Script API and the frozen 19-sheet architecture.
 *
 * Frontend  : Next.js 16
 * Backend   : Google Apps Script
 * Database  : Google Sheets (19 locked worksheets)
 * ============================================================
 */

import api from "./api";

/* ============================================================
   Frozen Sheet Names
   ============================================================ */

export const SHEETS = {
  SETTINGS: "Settings",
  MEMBERS: "Members",
  BUSINESS_IDS: "Business IDs",
  GENEALOGY: "Genealogy",
  PROSPECTS: "Prospects",
  WEEKLY_ACTIVATIONS: "Weekly Activations",
  BV_LEDGER: "BV Ledger",
  PAIR_LEDGER: "Pair Ledger",
  LEADERSHIP: "Leadership",
  MISSION_PROGRESS: "Mission Progress",
  EARNINGS: "Earnings",
  DAILY_AI_TASKS: "Daily AI Tasks",
  NOTIFICATIONS: "Notifications",
  LEADERBOARD: "Leaderboard",
  AUDIT_LOG: "Audit Log",
  REFERRALS: "Referrals",
  API_LOG: "API Log",
  AI_RECOMMENDATION_HISTORY:
    "AI Recommendation History",
  DASHBOARD_CACHE: "Dashboard Cache",
} as const;

/* ============================================================
   Dashboard
   ============================================================ */

export async function fetchDashboard() {
  const response = await api.getDashboard();
  return response.data;
}

/* ============================================================
   Members
   ============================================================ */

export async function fetchMembers() {
  const response = await api.getMembers();
  return response.data;
}

export async function fetchMember(
  memberId: string
) {
  const response = await api.getMember(memberId);
  return response.data;
}

export async function createMember(
  payload: unknown
) {
  const response = await api.createMember(
    payload
  );
  return response.data;
}

export async function updateMember(
  payload: unknown
) {
  const response = await api.updateMember(
    payload
  );
  return response.data;
}

/* ============================================================
   Prospects
   ============================================================ */

export async function fetchProspects() {
  const response = await api.getProspects();
  return response.data;
}

export async function createProspect(
  payload: unknown
) {
  const response =
    await api.createProspect(payload);

  return response.data;
}

export async function convertProspect(
  payload: unknown
) {
  const response =
    await api.convertProspect(payload);

  return response.data;
}

/* ============================================================
   Network / Placement
   ============================================================ */

export async function fetchGenealogy(
  memberId: string
) {
  const response =
    await api.getGenealogy(memberId);

  return response.data;
}

export async function fetchPlacement(
  memberId: string
) {
  const response =
    await api.getPlacement(memberId);

  return response.data;
}

/* ============================================================
   Leadership
   ============================================================ */

export async function fetchLeadership(
  memberId: string
) {
  const response =
    await api.getLeadership(memberId);

  return response.data;
}

/* ============================================================
   Mission
   ============================================================ */

export async function fetchMission(
  memberId: string
) {
  const response =
    await api.getMission(memberId);

  return response.data;
}

/* ============================================================
   Earnings
   ============================================================ */

export async function fetchEarnings(
  memberId: string
) {
  const response =
    await api.getEarnings(memberId);

  return response.data;
}

/* ============================================================
   AI
   ============================================================ */

export async function fetchAIRecommendations(
  memberId: string
) {
  const response =
    await api.getAIRecommendations(memberId);

  return response.data;
}

/* ============================================================
   Notifications
   ============================================================ */

export async function fetchNotifications(
  memberId: string
) {
  const response =
    await api.getNotifications(memberId);

  return response.data;
}

/* ============================================================
   System Health
   ============================================================ */

export async function pingBackend() {
  const response = await api.ping();
  return response.data;
}

/* ============================================================
   Unified Service Export
   ============================================================ */

const sheetsService = {
  sheets: SHEETS,

  fetchDashboard,

  fetchMembers,
  fetchMember,
  createMember,
  updateMember,

  fetchProspects,
  createProspect,
  convertProspect,

  fetchGenealogy,
  fetchPlacement,

  fetchLeadership,

  fetchMission,

  fetchEarnings,

  fetchAIRecommendations,

  fetchNotifications,

  pingBackend,
};

export default sheetsService;

