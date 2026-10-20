import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateFreight, formatVND, buildZaloUrl } from './freight.ts';

test('calculateFreight computes brick and freight totals accurately for default 5 thien', () => {
  const result = calculateFreight({
    thien: 5,
    unitPrice: 850,
    distanceKm: 14,
    ratePerThienKm: 15000
  });

  // 5 * 850 * 1000 = 4,250,000
  assert.equal(result.brickTotal, 4250000);
  assert.equal(result.totalPcs, 5000);

  // freight: 5 * 14 * 15000 = 1,050,000
  assert.equal(result.freightCost, 1050000);

  assert.equal(result.totalFreight, 1050000);
  assert.equal(result.grandTotal, 5300000);
  assert.equal(result.perUnitDelivered, 1060);
});

test('extra distance increases only the estimated freight cost', () => {
  const original = calculateFreight({
    thien: 10,
    unitPrice: 1150,
    distanceKm: 20
  });
  const further = calculateFreight({
    thien: 10,
    unitPrice: 1150,
    distanceKm: 25
  });

  assert.equal(further.brickTotal, original.brickTotal);
  assert.equal(further.freightCost - original.freightCost, 750000);
  assert.equal(further.grandTotal, further.brickTotal + further.freightCost);
});

test('formatVND formats Vietnamese currency strings with đ', () => {
  assert.equal(formatVND(850000), '850.000 đ');
  assert.equal(formatVND(9250000), '9.250.000 đ');
});

test('buildZaloUrl encodes pre-filled inquiry text properly', () => {
  const url = buildZaloUrl('0908.123.456', 'Gạch Ống 4 Lỗ', 'Lò Tuynel 1 - Bình Dương', 'công trình Quận 9');
  assert.ok(url.startsWith('https://zalo.me/0908123456?text='));
  assert.ok(url.includes(encodeURIComponent('Gạch Ống 4 Lỗ')));
  assert.ok(url.includes(encodeURIComponent('Lò Tuynel 1 - Bình Dương')));
});
