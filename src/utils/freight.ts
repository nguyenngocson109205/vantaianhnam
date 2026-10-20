/**
 * Pure calculation logic for Kiln & Haul Freight Estimator
 */

export interface FreightCalcParams {
  thien: number; // số thiên gạch (1 thiên = 1,000 viên)
  unitPrice: number; // đơn giá tại lò (VNĐ / viên)
  distanceKm: number; // khoảng cách km
  ratePerThienKm?: number; // cước vận chuyển VNĐ / thiên / km (mặc định 15,000 đ)
  baseHaulageFee?: number; // phí mở chuyến cơ bản (mặc định 350,000 đ)
}

export interface FreightCalcResult {
  brickTotal: number;
  freightCost: number;
  totalFreight: number;
  grandTotal: number;
  perUnitDelivered: number;
  totalPcs: number;
}

export function calculateFreight(params: FreightCalcParams): FreightCalcResult {
  const thien = Math.max(0.5, params.thien || 5);
  const totalPcs = Math.round(thien * 1000);
  const unitPrice = Math.max(0, params.unitPrice || 850);
  const distanceKm = Math.max(1, params.distanceKm || 10);
  const ratePerThienKm = params.ratePerThienKm ?? 15000;
  const baseHaulageFee = params.baseHaulageFee ?? 350000;

  // Tiền gạch tại lò = số thiên * (giá mỗi viên * 1000)
  const brickTotal = Math.round(thien * (unitPrice * 1000));

  // Tiền cước vận chuyển theo khoảng cách:
  // Công thức theo yêu cầu: Số thiên * km * Đơn giá cước theo km
  // Kèm theo phí cơ bản chuyến xe phù hợp thực tế đường bộ
  let freightCost = Math.round(thien * distanceKm * ratePerThienKm);
  if (freightCost < baseHaulageFee) {
    freightCost = baseHaulageFee;
  }

  // Cước xe ước tính theo km, không cộng phụ phí cẩu hạ.
  const totalFreight = freightCost;

  const grandTotal = brickTotal + totalFreight;
  const perUnitDelivered = totalPcs > 0 ? Math.round(grandTotal / totalPcs) : unitPrice;

  return {
    brickTotal,
    freightCost,
    totalFreight,
    grandTotal,
    perUnitDelivered,
    totalPcs
  };
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(Math.round(amount)) + ' đ';
}

export function buildZaloUrl(phone: string, brickName: string, kilnName: string, destination = 'công trình'): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const message = `Tôi cần tư vấn giá ${brickName} từ ${kilnName} giao về ${destination}. Xin báo giá tốt nhất cho công trình của tôi!`;
  return `https://zalo.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
