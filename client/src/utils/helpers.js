import icons from './icons';

const { AiOutlineStar, AiFillStar } = icons;

export const createSlug = (string) =>
  string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .join('-');

export const formatMoney = (number) =>
  Number(number?.toFixed(1)).toLocaleString();

export const renderStarFromNumber = (number, size) => {
  if (!Number(number)) return;
  const stars = [];
  number = Math.round(number);
  for (let i = 0; i < +number; i++)
    stars.push(<AiFillStar color="orange" size={size || 16} />);
  for (let i = 5; i > +number; i--)
    stars.push(<AiOutlineStar color="orange" size={size || 16} />);
  return stars;
};

export function secondsToHms(d) {
  d = Number(d) / 1000;
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);
  return { h, m, s };
}

export const validate = (payload, setInvalidFields) => {
  let invalids = 0;
  const formatPayload = Object.entries(payload);
  for (let arr of formatPayload) {
    if (arr[1].trim() === '') {
      invalids++;
      setInvalidFields((prev) => [
        ...prev,
        { name: arr[0], mes: 'Không được để trống.' },
      ]);
    }
  }
  for (let arr of formatPayload) {
      switch (arr[0]) {

          case 'firstname':
              const ho = /^[^\d?!\@#\$%\><\^\&*\)\(+=._-]{2,}$/
              if (!arr[1].match(ho)) {
                  invalids++
                  setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Họ chỉ chứa chữ cái và dấu' }])
              }
              break;
          
          case 'lastname':
                const ten = /^[^\d?!\@#\$%\><\^\&*\)\(+=._-]{2,}$/
                if (!arr[1].match(ten)) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Tên chỉ chứa chữ cái và dấu' }])
                }
                break;
          case 'mobile':
                const mobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
                if (!arr[1].match(mobile)) {
                    invalids++
                    setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Số điện thoại không đúng' }])
                }
                break;      
          case 'email':
              const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              if (!arr[1].match(email)) {
                  invalids++
                  setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Email không đúng.' }])
              }
              break;

          // case 'password':
          //   const pass = /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})$/
          //     if (!arr[1].match(pass)) {
          //         invalids++
          //         setInvalidFields(prev => [...prev, { name: arr[0], mes: 'Mật khẩu tối thiểu 8 ký tự, có số, có một chữ cái in hoa và một kí tự đặc biệt.' }])
          //     }
          //     break;
          default:
              break;
      }
  }

  return invalids;
};

export const fotmatPrice = (number) => Math.round(number / 1000) * 1000;

export const generateRange = (start, end) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, index) => start + index);
};
export function getBase64(file) {
  if (!file) return '';
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
