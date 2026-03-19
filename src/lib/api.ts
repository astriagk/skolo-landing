// Centralised API client — all fetch calls go through here.

// ── Low-level helpers ─────────────────────────────────────────────────────────

async function get<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  return res.json() as Promise<T>;
}

async function post<T>(url: string, body: unknown): Promise<{ ok: boolean; status: number; data: T }> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as T;
  return { ok: res.ok, status: res.status, data };
}

// ── Clicks ────────────────────────────────────────────────────────────────────

export async function getClickCount(): Promise<number> {
  const { count } = await get<{ count: number }>("/api/click");
  return count ?? 0;
}

export async function recordClick(anonymousId: string): Promise<{ alreadyCounted: boolean }> {
  const { data } = await post<{ alreadyCounted: boolean }>("/api/click", { anonymousId });
  return data;
}

// ── Interest ──────────────────────────────────────────────────────────────────

export interface InterestCounts {
  parent: number;
  school: number;
  driver: number;
  total: number;
}

export async function getInterestCounts(): Promise<InterestCounts> {
  return get<InterestCounts>("/api/interest");
}

export async function checkPhone(
  phone: string,
  userType: string,
): Promise<{ exists: boolean; message?: string }> {
  return get(`/api/interest?phone=${phone}&userType=${userType}`);
}

export interface SubmitInterestResult {
  ok: boolean;
  /** HTTP status — use 409 to detect duplicate registration */
  status: number;
  message?: string;
}

export async function submitInterest(
  data: Record<string, unknown>,
): Promise<SubmitInterestResult> {
  const { ok, status, data: json } = await post<{ message?: string }>("/api/interest", data);
  return { ok, status, message: (json as { message?: string }).message };
}

