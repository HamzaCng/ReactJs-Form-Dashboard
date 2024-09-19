// Null, undefined ve length'i 0'dan büyük olan değerleri filtreleyen fonksiyon
export default function bodyNullCheck(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) =>
      value !== null && value !== undefined && value !== ''
    )
  );
}