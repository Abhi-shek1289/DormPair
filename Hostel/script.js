// ============================================================
//  APP STATE
// ============================================================
let currentUser = null;
const users = [
  { email: 'admin@hostel.com', pass: 'admin123', name: 'Admin User', hostel: 'DormPair Premium' }
];

const state = {
  rooms: [
    { num:'101', type:'Private Single',   cap:1, floor:'1st Floor',    ac:true,  wash:true,  wifi:true,  locker:false, price:800,  status:'occupied',    occupant:'Arjun Sharma' },
    { num:'102', type:'Private Double',   cap:2, floor:'1st Floor',    ac:true,  wash:true,  wifi:true,  locker:false, price:1200, status:'occupied',    occupant:'Priya Verma' },
    { num:'103', type:'Private Single',   cap:1, floor:'1st Floor',    ac:false, wash:false, wifi:true,  locker:false, price:500,  status:'occupied',    occupant:'Anjali Patel' },
    { num:'104', type:'Private Single',   cap:1, floor:'1st Floor',    ac:true,  wash:false, wifi:true,  locker:true,  price:700,  status:'vacant',      occupant:'' },
    { num:'105', type:'Private Double',   cap:2, floor:'1st Floor',    ac:false, wash:false, wifi:false, locker:false, price:700,  status:'vacant',      occupant:'' },
    { num:'201', type:'Dormitory',        cap:8, floor:'2nd Floor',    ac:true,  wash:false, wifi:true,  locker:true,  price:400,  status:'occupied',    occupant:'Carlos + 4' },
    { num:'202', type:'Private Double',   cap:2, floor:'2nd Floor',    ac:true,  wash:true,  wifi:true,  locker:false, price:1400, status:'occupied',    occupant:'Sarah Lee' },
    { num:'203', type:'Family Suite',     cap:4, floor:'2nd Floor',    ac:true,  wash:true,  wifi:true,  locker:false, price:2000, status:'maintenance', occupant:'' },
    { num:'204', type:'Dormitory',        cap:8, floor:'2nd Floor',    ac:false, wash:false, wifi:false, locker:true,  price:300,  status:'occupied',    occupant:'7 guests' },
    { num:'301', type:'Private Single',   cap:1, floor:'3rd Floor',    ac:true,  wash:true,  wifi:true,  locker:true,  price:900,  status:'occupied',    occupant:'Rahul Mishra' },
    { num:'302', type:'Private Double',   cap:2, floor:'3rd Floor',    ac:true,  wash:false, wifi:true,  locker:false, price:1100, status:'vacant',      occupant:'' },
    { num:'303', type:'Family Suite',     cap:4, floor:'3rd Floor',    ac:true,  wash:true,  wifi:true,  locker:true,  price:2200, status:'vacant',      occupant:'' },
    { num:'304', type:'Dormitory',        cap:8, floor:'3rd Floor',    ac:false, wash:false, wifi:false, locker:false, price:280,  status:'maintenance', occupant:'' },
    { num:'305', type:'Triple Room',      cap:3, floor:'3rd Floor',    ac:false, wash:true,  wifi:true,  locker:false, price:750,  status:'occupied',    occupant:'Guest X' },
    { num:'401', type:'Private Double',   cap:2, floor:'4th Floor',    ac:true,  wash:true,  wifi:true,  locker:true,  price:1500, status:'occupied',    occupant:'Guest Y' },
    { num:'402', type:'Private Single',   cap:1, floor:'4th Floor',    ac:true,  wash:false, wifi:true,  locker:false, price:750,  status:'vacant',      occupant:'' },
    { num:'403', type:'Family Suite',     cap:6, floor:'4th Floor',    ac:true,  wash:true,  wifi:true,  locker:true,  price:2500, status:'vacant',      occupant:'' },
  ],
  guests: [
    { id:1, name:'Arjun Sharma',  phone:'+91 98765 43210', room:'101', checkin:'2026-02-22', checkout:'2026-02-27', status:'active',   amount:4000, paid:2000 },
    { id:2, name:'Priya Verma',   phone:'+91 87654 32109', room:'102', checkin:'2026-02-23', checkout:'2026-02-28', status:'active',   amount:3200, paid:3200 },
    { id:3, name:'Carlos Mendez', phone:'+91 76543 21098', room:'201', checkin:'2026-02-20', checkout:'2026-02-26', status:'checkout', amount:5600, paid:0 },
    { id:4, name:'Sarah Lee',     phone:'+91 65432 10987', room:'202', checkin:'2026-02-21', checkout:'2026-02-27', status:'active',   amount:4800, paid:4800 },
    { id:5, name:'Rahul Mishra',  phone:'+91 54321 09876', room:'301', checkin:'2026-02-24', checkout:'2026-02-28', status:'active',   amount:3600, paid:1800 },
    { id:6, name:'Anjali Patel',  phone:'+91 43210 98765', room:'103', checkin:'2026-02-25', checkout:'2026-03-02', status:'active',   amount:5600, paid:2800 },
  ],
  bookings: [
    { id:'BK001', guest:'Vikram Singh', room:'Private Single', checkin:'2026-02-27', checkout:'2026-03-02', amount:2400, status:'confirmed' },
    { id:'BK002', guest:'Emma Wilson',  room:'Dormitory',      checkin:'2026-02-28', checkout:'2026-03-05', amount:2450, status:'pending' },
    { id:'BK003', guest:'Rohan Gupta',  room:'Family Suite',   checkin:'2026-03-01', checkout:'2026-03-04', amount:6000, status:'confirmed' },
  ],
  transactions: [
    { id:'INV-001', guest:'Priya Verma',  room:'102', amount:3200, method:'UPI',  date:'2026-02-26', status:'paid' },
    { id:'INV-002', guest:'Sarah Lee',    room:'202', amount:4800, method:'Card', date:'2026-02-25', status:'paid' },
    { id:'INV-003', guest:'Carlos Mendez',room:'201', amount:5600, method:'Cash', date:'2026-02-24', status:'pending' },
    { id:'INV-004', guest:'Arjun Sharma', room:'101', amount:2000, method:'UPI',  date:'2026-02-22', status:'paid' },
  ],
  maintenance: [
    { id:1, room:'203', issue:'AC not cooling', priority:'high',   staff:'Rajesh Kumar', status:'in-progress' },
    { id:2, room:'304', issue:'Ceiling fan broken', priority:'high', staff:'Sunil Verma', status:'pending' },
    { id:3, room:'102', issue:'Faucet dripping',    priority:'medium', staff:'Amit Sharma', status:'pending' },
    { id:4, room:'301', issue:'Door lock stiff',    priority:'medium', staff:'Rajesh Kumar', status:'in-progress' },
    { id:5, room:'401', issue:'Bulb replacement',   priority:'low',  staff:'Sunil Verma', status:'completed' },
  ],
  inventory: [
    { id:1, name:'Bed Sheets',      cat:'linen',       stock:120, min:50 },
    { id:2, name:'Pillowcases',     cat:'linen',       stock:90,  min:40 },
    { id:3, name:'Towels',          cat:'linen',       stock:18,  min:30 },
    { id:4, name:'Soap Bars',       cat:'toiletries',  stock:200, min:50 },
    { id:5, name:'Shampoo Bottles', cat:'toiletries',  stock:8,   min:20 },
    { id:6, name:'Toilet Paper',    cat:'toiletries',  stock:150, min:40 },
    { id:7, name:'Rice (kg)',       cat:'kitchen',     stock:25,  min:10 },
    { id:8, name:'Light Bulbs',     cat:'maintenance', stock:30,  min:20 },
  ],
  notifications: [
    { id:1, icon:'🚪', title:'New Check-in',     msg:'Arjun Sharma checked into Room 101', time:'10 min ago', read:false },
    { id:2, icon:'⚠️', title:'Maintenance Alert', msg:'Room 203 AC issue needs attention', time:'45 min ago', read:false },
    { id:3, icon:'💰', title:'Payment Received',  msg:'Priya Verma paid ₹3,200 via UPI',  time:'1 hr ago',   read:false },
    { id:4, icon:'📦', title:'Low Inventory',     msg:'Shampoo bottles below minimum',     time:'2 hrs ago',  read:false },
    { id:5, icon:'📅', title:'New Booking',       msg:'Vikram Singh booked Private Single',time:'3 hrs ago',  read:false },
    { id:6, icon:'🏃', title:'Checkout Due',      msg:'Carlos Mendez (Room 201) due today',time:'4 hrs ago',  read:true },
  ],
  activities: [
    { icon:'🚪', bg:'rgba(0,229,255,0.1)',   text:'<strong>Arjun Sharma</strong> checked into Room 101',   time:'10 min ago' },
    { icon:'💰', bg:'rgba(0,200,150,0.1)',   text:'<strong>Priya Verma</strong> paid ₹3,200 via UPI',      time:'45 min ago' },
    { icon:'📅', bg:'rgba(124,58,237,0.1)', text:'New booking from <strong>Vikram Singh</strong>',         time:'1 hr ago' },
    { icon:'🔧', bg:'rgba(255,107,53,0.1)', text:'Maintenance request for <strong>Room 203</strong>',      time:'2 hrs ago' },
  ],
  allocHistory: [],
  nextGuestId: 7,
  roomFilter: 'all',
  bookingFilter: 'all',
  guestStatusFilter: 'all',
  recentlyAdded: [],
};

// ============================================================
//  AUTH FUNCTIONS
// ============================================================
function showScreen(s) {
  document.getElementById('loginScreen').classList.remove('visible');
  document.getElementById('signupScreen').classList.remove('visible');
  document.getElementById('mainApp').classList.remove('visible');
  if (s === 'login')  document.getElementById('loginScreen').classList.add('visible');
  if (s === 'signup') document.getElementById('signupScreen').classList.add('visible');
  if (s === 'app')    document.getElementById('mainApp').classList.add('visible');
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  let ok = true;
  if (!email || !email.includes('@')) { document.getElementById('login-email-err').classList.add('show'); ok=false; } else document.getElementById('login-email-err').classList.remove('show');
  if (pass.length < 6) { document.getElementById('login-pass-err').classList.add('show'); ok=false; } else document.getElementById('login-pass-err').classList.remove('show');
  if (!ok) return;
  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) { showToast('Invalid email or password!', 'error'); return; }
  loginSuccess(user);
}

function demoLogin() {
  loginSuccess({ email:'demo@hostel.com', name:'Demo Admin', hostel:'Demo Hostel' });
}

function doSignup() {
  const name   = document.getElementById('su-name').value.trim();
  const hostel = document.getElementById('su-hostel').value.trim();
  const email  = document.getElementById('su-email').value.trim();
  const pass   = document.getElementById('su-pass').value;
  const pass2  = document.getElementById('su-pass2').value;
  let ok = true;
  const showErr = (id, show) => document.getElementById(id).classList[show?'add':'remove']('show');
  showErr('su-name-err',  !name);   if (!name)  ok=false;
  showErr('su-hostel-err',!hostel); if (!hostel) ok=false;
  showErr('su-email-err', !email || !email.includes('@')); if (!email.includes('@')) ok=false;
  showErr('su-pass-err',  pass.length < 6);   if (pass.length<6) ok=false;
  showErr('su-pass2-err', pass !== pass2);     if (pass !== pass2) ok=false;
  if (!ok) return;
  if (users.find(u => u.email === email)) { showToast('Email already registered!', 'error'); return; }
  const newUser = { email, pass, name, hostel };
  users.push(newUser);
  loginSuccess(newUser);
}

function loginSuccess(user) {
  currentUser = user;
  document.getElementById('adminName').textContent = user.name || 'Admin';
  document.getElementById('adminRole').textContent = user.hostel || 'Hostel Manager';
  document.getElementById('adminAvatar').textContent = (user.name||'A')[0].toUpperCase();
  document.getElementById('dashName').textContent = user.name ? user.name.split(' ')[0] : 'Admin';
  if (document.getElementById('hostel-name')) document.getElementById('hostel-name').value = user.hostel || 'DormPair';
  showScreen('app');
  initApp();
  showToast(`Welcome back, ${user.name||'Admin'}! 👋`, 'success');
}

function logout() {
  if (!confirm('Sign out?')) return;
  currentUser = null;
  showScreen('login');
}

// ============================================================
//  NAVIGATION
// ============================================================
const pageTitles = {
  dashboard:'Dashboard', addroom:'Add Room', allrooms:'View All Rooms',
  searchrooms:'Search & Filter Rooms', allocate:'Allocate Room',
  guests:'Guests', checkin:'Check In/Out', bookings:'Bookings',
  billing:'Billing & Payments', maintenance:'Maintenance',
  inventory:'Inventory', reports:'Analytics', notifications:'Notifications', settings:'Settings'
};

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('page-'+page);
  if (el) el.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(item => {
    if ((item.getAttribute('onclick')||'').includes(`'${page}'`)) item.classList.add('active');
  });
  document.getElementById('pageTitle').textContent = pageTitles[page] || page;
  const renders = {
    dashboard:   ()=>updateDashboard(),
    allrooms:    ()=>renderAllRooms(),
    searchrooms: ()=>{},
    allocate:    ()=>renderAllocHistory(),
    guests:      ()=>renderGuests(),
    bookings:    ()=>renderBookings(),
    billing:     ()=>renderBilling(),
    maintenance: ()=>renderMaintenance(),
    inventory:   ()=>renderInventory(),
    reports:     ()=>renderReports(),
    notifications:()=>renderNotifications(),
    checkin:     ()=>populateRoomDropdowns(),
  };
  if (renders[page]) renders[page]();
}

// ============================================================
//  MODAL
// ============================================================
function openModal(id) {
  document.getElementById(id).classList.add('open');
  if (id==='addGuestModal') populateRoomDropdowns(['g-room']);
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target===m) m.classList.remove('open'); });
});

// ============================================================
//  TOAST
// ============================================================
function showToast(msg, type='info') {
  const icons = { success:'✅', error:'❌', info:'💡' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// ============================================================
//  ADD ROOM (Assignment Feature #1)
// ============================================================
function addRoom() {
  const num  = document.getElementById('ar-num').value.trim().toUpperCase();
  const cap  = parseInt(document.getElementById('ar-cap').value);
  let ok = true;
  if (!num) { document.getElementById('ar-num-err').classList.add('show'); ok=false; }
  else document.getElementById('ar-num-err').classList.remove('show');
  if (!cap || cap < 1) { document.getElementById('ar-cap-err').classList.add('show'); ok=false; }
  else document.getElementById('ar-cap-err').classList.remove('show');
  if (!ok) return;
  if (state.rooms.find(r => r.num === num)) { showToast(`Room ${num} already exists!`, 'error'); return; }
  const room = {
    num,
    type:  document.getElementById('ar-type').value,
    cap,
    floor: document.getElementById('ar-floor').value,
    ac:    document.getElementById('ar-ac').checked,
    wash:  document.getElementById('ar-wash').checked,
    wifi:  document.getElementById('ar-wifi').checked,
    locker:document.getElementById('ar-locker').checked,
    price: parseInt(document.getElementById('ar-price').value) || 0,
    status:'vacant',
    occupant:''
  };
  state.rooms.push(room);
  state.recentlyAdded.unshift(room);
  renderRecentlyAdded();
  addActivity('🏠','rgba(0,229,255,0.1)',`Room <strong>${num}</strong> (${room.type}, cap ${cap}) added to system`);
  showToast(`Room ${num} added successfully!`, 'success');
  clearAddRoom();
}

function clearAddRoom() {
  ['ar-num','ar-cap','ar-price'].forEach(id => { const e=document.getElementById(id); if(e) e.value=''; });
  ['ar-ac','ar-wash','ar-locker'].forEach(id => { const e=document.getElementById(id); if(e) e.checked=false; });
  const wifi = document.getElementById('ar-wifi'); if(wifi) wifi.checked=true;
  document.getElementById('ar-type').value = 'Dormitory';
  document.getElementById('ar-floor').value = 'Ground Floor';
  ['ar-num-err','ar-cap-err'].forEach(id => document.getElementById(id).classList.remove('show'));
}

function renderRecentlyAdded() {
  const el = document.getElementById('recentlyAdded');
  if (!el) return;
  if (!state.recentlyAdded.length) {
    el.innerHTML = '<div style="text-align:center;color:var(--text-dim);padding:40px 0;font-size:13px;">No rooms added yet</div>';
    return;
  }
  el.innerHTML = state.recentlyAdded.slice(0,5).map(r => `
    <div class="maint-item">
      <div class="maint-priority low"></div>
      <div class="maint-info">
        <div class="maint-title">Room ${r.num} — ${r.type}</div>
        <div class="maint-meta">Cap: ${r.cap} · ${r.ac?'AC':'Non-AC'} · ${r.wash?'Attached WR':'Shared WR'}</div>
      </div>
      <span class="badge badge-blue">Vacant</span>
    </div>
  `).join('');
}

// ============================================================
//  VIEW ALL ROOMS (Assignment Feature #2)
// ============================================================
let allRoomsFilter = 'all';

function renderAllRooms() {
  const sort = document.getElementById('allrooms-sort')?.value || 'num';
  let rooms = [...state.rooms];
  if (allRoomsFilter === 'vacant')      rooms = rooms.filter(r => r.status==='vacant');
  else if (allRoomsFilter === 'occupied')    rooms = rooms.filter(r => r.status==='occupied');
  else if (allRoomsFilter === 'maintenance') rooms = rooms.filter(r => r.status==='maintenance');
  else if (allRoomsFilter === 'ac')      rooms = rooms.filter(r => r.ac);
  else if (allRoomsFilter === 'washroom')rooms = rooms.filter(r => r.wash);
  if (sort==='cap')    rooms.sort((a,b)=>a.cap-b.cap);
  else if (sort==='status') rooms.sort((a,b)=>a.status.localeCompare(b.status));
  else rooms.sort((a,b)=>a.num.localeCompare(b.num));

  const sub = document.getElementById('allrooms-sub');
  if (sub) sub.textContent = `Showing ${rooms.length} of ${state.rooms.length} rooms`;

  // TABLE
  const tbody = document.getElementById('allRoomsTable');
  if (tbody) {
    tbody.innerHTML = rooms.map(r => `
      <tr>
        <td class="td-mono">${r.num}</td>
        <td class="td-name">${r.type}</td>
        <td><span class="capacity-pill">👥 ${r.cap}</span></td>
        <td style="color:var(--text-dim);font-size:12px">${r.floor}</td>
        <td>${r.ac ? '<span class="badge badge-purple">🌡️ YES</span>' : '<span class="badge badge-gray">NO</span>'}</td>
        <td>${r.wash ? '<span class="badge badge-green">🚿 YES</span>' : '<span class="badge badge-gray">NO</span>'}</td>
        <td class="td-mono">${r.price ? '₹'+r.price : '—'}</td>
        <td><span class="badge ${r.status==='occupied'?'badge-green':r.status==='vacant'?'badge-blue':'badge-yellow'}">${r.status}</span></td>
        <td style="color:var(--text-mid);font-size:12px">${r.occupant||'—'}</td>
        <td>
          <div class="flex-row">
            <button class="btn btn-sm btn-secondary" onclick="showRoomDetail('${r.num}')">View</button>
            <button class="btn btn-sm btn-danger" onclick="deleteRoom('${r.num}')">✕</button>
          </div>
        </td>
      </tr>
    `).join('');
  }
  // GRID
  const grid = document.getElementById('allRoomsGrid');
  if (grid) {
    grid.innerHTML = rooms.map(r => `
      <div class="room-card ${r.status}" onclick="showRoomDetail('${r.num}')">
        <span class="room-dot"></span>
        <div class="room-num">${r.num}</div>
        <div class="room-type">${r.type} · Cap ${r.cap}</div>
        <div class="room-amenities">
          ${r.ac ? '<span class="amenity-tag ac">🌡️ AC</span>' : ''}
          ${r.wash ? '<span class="amenity-tag washroom">🚿 WR</span>' : ''}
          ${r.wifi ? '<span class="amenity-tag">📶 WiFi</span>' : ''}
        </div>
        <div style="margin-top:8px;">
          <span class="badge ${r.status==='occupied'?'badge-green':r.status==='vacant'?'badge-blue':'badge-yellow'}">${r.status}</span>
        </div>
        ${r.occupant ? `<div class="room-occupant" style="margin-top:6px;">👤 ${r.occupant}</div>`:''}
      </div>
    `).join('') || '<div style="color:var(--text-dim);padding:30px;text-align:center;">No rooms match filter</div>';
  }
}

function filterAllRooms(f, btn) {
  allRoomsFilter = f;
  document.querySelectorAll('#page-allrooms .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAllRooms();
}

function showRoomDetail(num) {
  const r = state.rooms.find(x => x.num===num);
  if (!r) return;
  document.getElementById('roomDetailTitle').textContent = `🏠 Room ${r.num} Details`;
  document.getElementById('roomDetailContent').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px;">
      <div><span style="color:var(--text-dim)">Room No.:</span> <strong>${r.num}</strong></div>
      <div><span style="color:var(--text-dim)">Type:</span> ${r.type}</div>
      <div><span style="color:var(--text-dim)">Capacity:</span> <strong>${r.cap}</strong></div>
      <div><span style="color:var(--text-dim)">Floor:</span> ${r.floor}</div>
      <div><span style="color:var(--text-dim)">AC:</span> ${r.ac ? '✅ Yes' : '❌ No'}</div>
      <div><span style="color:var(--text-dim)">Attached Washroom:</span> ${r.wash ? '✅ Yes' : '❌ No'}</div>
      <div><span style="color:var(--text-dim)">WiFi:</span> ${r.wifi ? '✅ Yes' : '❌ No'}</div>
      <div><span style="color:var(--text-dim)">Lockers:</span> ${r.locker ? '✅ Yes' : '❌ No'}</div>
      <div><span style="color:var(--text-dim)">Price/Night:</span> ${r.price ? '₹'+r.price : '—'}</div>
      <div><span style="color:var(--text-dim)">Status:</span> <span class="badge ${r.status==='vacant'?'badge-blue':r.status==='occupied'?'badge-green':'badge-yellow'}">${r.status}</span></div>
      ${r.occupant ? `<div style="grid-column:1/-1"><span style="color:var(--text-dim)">Occupant:</span> 👤 ${r.occupant}</div>` : ''}
    </div>
    ${r.status==='vacant' ? `
    <div style="margin-top:16px;padding:12px;background:var(--surface2);border-radius:8px;font-size:12px;color:var(--text-dim);">
      This room is vacant and available for allocation.
      <button class="btn btn-success btn-sm" style="margin-top:8px;" onclick="closeModal('roomDetailModal');navigate('allocate')">⚡ Allocate This Room</button>
    </div>` : ''}
  `;
  document.getElementById('roomDeleteBtn').onclick = () => { deleteRoom(num); closeModal('roomDetailModal'); };
  openModal('roomDetailModal');
}

function deleteRoom(num) {
  if (!confirm(`Delete Room ${num}? This cannot be undone.`)) return;
  state.rooms = state.rooms.filter(r => r.num !== num);
  renderAllRooms();
  updateDashboard();
  showToast(`Room ${num} deleted`, 'info');
}

// ============================================================
//  SEARCH ROOMS (Assignment Feature #3)
// ============================================================
function searchRooms() {
  const capInput = document.getElementById('sr-cap').value;
  const minCap   = capInput ? parseInt(capInput) : null;
  const acReq    = document.getElementById('sr-ac').value;
  const washReq  = document.getElementById('sr-wash').value;
  const statusReq= document.getElementById('sr-status').value;
  const typeReq  = document.getElementById('sr-type').value;
  const priceMax = document.getElementById('sr-price').value ? parseInt(document.getElementById('sr-price').value) : null;

  let results = [...state.rooms];
  if (minCap !== null)  results = results.filter(r => r.cap >= minCap);
  if (acReq === 'yes')  results = results.filter(r => r.ac === true);
  if (acReq === 'no')   results = results.filter(r => r.ac === false);
  if (washReq === 'yes')results = results.filter(r => r.wash === true);
  if (washReq === 'no') results = results.filter(r => r.wash === false);
  if (statusReq !== 'any') results = results.filter(r => r.status === statusReq);
  if (typeReq !== 'any') results = results.filter(r => r.type === typeReq);
  if (priceMax !== null) results = results.filter(r => !r.price || r.price <= priceMax);

  const titleEl = document.getElementById('searchResultTitle');
  const contentEl = document.getElementById('searchResultContent');
  titleEl.textContent = `📋 Search Results — ${results.length} room(s) found`;

  if (!results.length) {
    contentEl.innerHTML = `
      <div style="text-align:center;padding:50px 0;">
        <div style="font-size:40px;margin-bottom:12px;">🔍</div>
        <div style="font-size:16px;font-weight:700;color:var(--red);font-family:var(--font-head);">No rooms found</div>
        <div style="font-size:13px;color:var(--text-dim);margin-top:6px;">No rooms match your search criteria. Try adjusting the filters.</div>
      </div>
    `;
    return;
  }

  contentEl.innerHTML = `
    <div class="table-wrap mb-16">
      <table>
        <thead>
          <tr><th>Room No.</th><th>Type</th><th>Capacity</th><th>Floor</th><th>AC</th><th>Attached Washroom</th><th>Price/Night</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${results.map(r => `
            <tr>
              <td class="td-mono">${r.num}</td>
              <td class="td-name">${r.type}</td>
              <td><span class="capacity-pill">👥 ${r.cap}</span></td>
              <td style="color:var(--text-dim);font-size:12px">${r.floor}</td>
              <td>${r.ac?'<span class="badge badge-purple">🌡️ YES</span>':'<span class="badge badge-gray">NO</span>'}</td>
              <td>${r.wash?'<span class="badge badge-green">🚿 YES</span>':'<span class="badge badge-gray">NO</span>'}</td>
              <td class="td-mono">${r.price?'₹'+r.price:'—'}</td>
              <td><span class="badge ${r.status==='vacant'?'badge-blue':r.status==='occupied'?'badge-green':'badge-yellow'}">${r.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="rooms-grid">
      ${results.map(r=>`
        <div class="room-card ${r.status}" onclick="showRoomDetail('${r.num}')">
          <span class="room-dot"></span>
          <div class="room-num">${r.num}</div>
          <div class="room-type">${r.type} · Cap ${r.cap}</div>
          <div class="room-amenities">
            ${r.ac?'<span class="amenity-tag ac">🌡️ AC</span>':''}
            ${r.wash?'<span class="amenity-tag washroom">🚿 WR</span>':''}
            ${r.wifi?'<span class="amenity-tag">📶 WiFi</span>':''}
          </div>
          <div style="margin-top:8px;"><span class="badge ${r.status==='vacant'?'badge-blue':r.status==='occupied'?'badge-green':'badge-yellow'}">${r.status}</span></div>
        </div>
      `).join('')}
    </div>
  `;
}

function resetSearch() {
  ['sr-cap','sr-price'].forEach(id => { const e=document.getElementById(id); if(e) e.value=''; });
  ['sr-ac','sr-wash','sr-status','sr-type'].forEach(id => { const e=document.getElementById(id); if(e) e.selectedIndex=0; });
  document.getElementById('searchResultTitle').textContent = '📋 Search Results';
  document.getElementById('searchResultContent').innerHTML = `
    <div style="text-align:center;color:var(--text-dim);padding:50px 0;font-size:14px;">
      <div style="font-size:36px;margin-bottom:12px;">🔍</div>
      Use the filters above and click <strong style="color:var(--text)">Search Rooms</strong> to find matching rooms.
    </div>`;
}

// ============================================================
//  ALLOCATE ROOM — AllocateRoom(students, needsAC, needsWashroom) (Assignment Feature #4)
// ============================================================
function allocateRoom() {
  const studentsInput = document.getElementById('alloc-students').value;
  const students = parseInt(studentsInput);
  const needsAC   = document.getElementById('alloc-ac').checked;
  const needsWash  = document.getElementById('alloc-wash').checked;
  const nameLabel  = document.getElementById('alloc-name').value.trim() || `${students} student(s)`;

  if (!students || students < 1) {
    document.getElementById('alloc-students-err').classList.add('show');
    showToast('Enter number of students!', 'error');
    return;
  }
  document.getElementById('alloc-students-err').classList.remove('show');

  // Algorithm: filter vacant rooms, capacity >= students, AC match, washroom match
  let candidates = state.rooms.filter(r => {
    if (r.status !== 'vacant') return false;
    if (r.cap < students) return false;
    if (needsAC && !r.ac) return false;
    if (needsWash && !r.wash) return false;
    return true;
  });

  const resultEl = document.getElementById('allocateResult');

  if (!candidates.length) {
    resultEl.className = 'allocate-result error';
    resultEl.innerHTML = `
      <div class="result-icon">❌</div>
      <div class="result-title" style="color:var(--red)">No Room Available</div>
      <div class="result-detail">
        No suitable room found for <strong>${students}</strong> student(s)
        ${needsAC ? ' with <strong>AC</strong>' : ''}
        ${needsWash ? ' and <strong>attached washroom</strong>' : ''}.
        <br><br>
        Possible reasons:<br>
        • All matching rooms are occupied or under maintenance<br>
        • No room with sufficient capacity exists<br>
        • No room meets the required facility combination<br><br>
        <button class="btn btn-secondary btn-sm" onclick="navigate('addroom')">➕ Add New Room</button>
      </div>
    `;
    // Add to history
    state.allocHistory.unshift({ time: new Date().toLocaleTimeString(), students, names: nameLabel, room:'—', cap:'—', ac: needsAC?'Yes':'Any', wash: needsWash?'Yes':'Any', result:'Not Available' });
    renderAllocHistory();
    showToast('No room available for these requirements', 'error');
    return;
  }

  // Pick smallest capacity room (best fit algorithm)
  candidates.sort((a, b) => a.cap - b.cap);
  const best = candidates[0];

  resultEl.className = 'allocate-result success';
  resultEl.innerHTML = `
    <div class="result-icon">✅</div>
    <div class="result-title" style="color:var(--green)">Room Allocated Successfully!</div>
    <div class="result-room-card">
      <div class="result-room-num">Room ${best.num}</div>
      <div class="result-room-detail">${best.type} · ${best.floor}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;">
        <div style="font-size:12px;color:var(--text-dim)">Capacity: <strong style="color:var(--text)">${best.cap}</strong></div>
        <div style="font-size:12px;color:var(--text-dim)">Students: <strong style="color:var(--text)">${students}</strong></div>
        <div>${best.ac ? '<span class="badge badge-purple">🌡️ AC</span>' : '<span class="badge badge-gray">No AC</span>'}</div>
        <div>${best.wash ? '<span class="badge badge-green">🚿 Attached WR</span>' : '<span class="badge badge-gray">Shared WR</span>'}</div>
        ${best.price ? `<div style="font-size:12px;color:var(--text-dim)">Price: <strong style="color:var(--accent)">₹${best.price}/night</strong></div>` : ''}
      </div>
    </div>
    <div style="font-size:12px;color:var(--text-mid);margin-top:8px;">Assigned to: <strong>${nameLabel}</strong> · Best-fit algorithm selected smallest suitable room</div>
    <div class="flex-row mt-16">
      <button class="btn btn-success" onclick="confirmAllocation('${best.num}', '${nameLabel.replace(/'/g,"\\'")}')">✅ Confirm Allocation</button>
      <button class="btn btn-secondary" onclick="clearAllocate()">↺ Cancel</button>
    </div>
  `;
  showToast(`Best room found: Room ${best.num} (capacity ${best.cap}) for ${students} student(s)`, 'success');
}

function confirmAllocation(roomNum, names) {
  const r = state.rooms.find(x => x.num === roomNum);
  if (!r) return;
  r.status = 'occupied';
  r.occupant = names;
  const students = parseInt(document.getElementById('alloc-students').value) || 1;
  const needsAC  = document.getElementById('alloc-ac').checked;
  const needsWash= document.getElementById('alloc-wash').checked;
  state.allocHistory.unshift({
    time: new Date().toLocaleTimeString(), students, names,
    room: roomNum, cap: r.cap,
    ac: needsAC?'Yes':'Any', wash: needsWash?'Yes':'Any', result:'Allocated'
  });
  addActivity('⚡','rgba(124,58,237,0.1)',`Room <strong>${roomNum}</strong> allocated to <strong>${names}</strong>`);
  renderAllocHistory();
  showToast(`Room ${roomNum} confirmed & marked occupied!`, 'success');
  document.getElementById('allocateResult').innerHTML = `
    <div style="text-align:center;padding:24px;">
      <div style="font-size:40px">🎉</div>
      <div style="font-family:var(--font-head);font-size:16px;margin-top:8px;color:var(--green)">Room ${roomNum} is now occupied!</div>
      <div style="font-size:13px;color:var(--text-dim);margin-top:4px;">Assigned to ${names}</div>
      <button class="btn btn-secondary btn-sm mt-16" onclick="clearAllocate()">New Allocation</button>
    </div>
  `;
}

function clearAllocate() {
  document.getElementById('alloc-students').value = '';
  document.getElementById('alloc-ac').checked = false;
  document.getElementById('alloc-wash').checked = false;
  document.getElementById('alloc-name').value = '';
  document.getElementById('alloc-students-err').classList.remove('show');
  document.getElementById('allocateResult').className = 'allocate-result';
  document.getElementById('allocateResult').innerHTML = `
    <div style="text-align:center;color:var(--text-dim);padding:20px 0;font-size:13px;">
      <div style="font-size:36px;margin-bottom:8px;">⚡</div>
      Fill in the parameters and click <strong style="color:var(--text)">Find & Allocate Best Room</strong>
    </div>`;
}

function renderAllocHistory() {
  const tbody = document.getElementById('allocHistory');
  if (!tbody) return;
  if (!state.allocHistory.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--text-dim);padding:24px;">No allocations yet</td></tr>';
    return;
  }
  tbody.innerHTML = state.allocHistory.map(h => `
    <tr>
      <td class="td-mono" style="font-size:11px">${h.time}</td>
      <td>${h.students}</td>
      <td class="td-mono">${h.room}</td>
      <td><span class="capacity-pill">👥 ${h.cap}</span></td>
      <td>${h.ac === 'Yes' ? '<span class="badge badge-purple">Yes</span>' : '<span class="badge badge-gray">Any</span>'}</td>
      <td>${h.wash === 'Yes' ? '<span class="badge badge-green">Yes</span>' : '<span class="badge badge-gray">Any</span>'}</td>
      <td><span class="badge ${h.result==='Allocated'?'badge-green':'badge-red'}">${h.result}</span></td>
    </tr>
  `).join('');
}

// ============================================================
//  DASHBOARD UPDATE
// ============================================================
function updateDashboard() {
  const total   = state.rooms.length;
  const vacant  = state.rooms.filter(r => r.status==='vacant').length;
  const occupied = state.rooms.filter(r => r.status==='occupied').length;
  const acCount = state.rooms.filter(r => r.ac).length;
  const pct = total ? Math.round((occupied/total)*100) : 0;

  const set = (id, val) => { const e=document.getElementById(id); if(e) e.textContent=val; };
  set('dash-total',    total);
  set('dash-vacant',   vacant);
  set('dash-occupied', occupied);
  set('dash-ac',       acCount);
  set('dash-total-sub',  `${state.rooms.filter(r=>r.status==='maintenance').length} under maintenance`);
  set('dash-vacant-sub', `${Math.round(vacant/total*100)||0}% available`);
  set('dash-occ-sub',    `${pct}% occupancy`);
  set('dash-ac-sub',     `${state.rooms.filter(r=>r.wash).length} with attached WR`);
  set('occupancyPct',    pct+'%');

  // Arc
  const circ = 226;
  const arc = document.getElementById('occupancyArc');
  if (arc) arc.setAttribute('stroke-dashoffset', String(circ - (circ * pct / 100)));

  // Legend
  const legend = document.getElementById('occupancyLegend');
  if (legend) legend.innerHTML = `
    <div class="legend-item"><span class="legend-dot" style="background:var(--green)"></span>Occupied (${occupied})</div>
    <div class="legend-item"><span class="legend-dot" style="background:var(--accent)"></span>Vacant (${vacant})</div>
    <div class="legend-item"><span class="legend-dot" style="background:var(--yellow)"></span>Maint. (${state.rooms.filter(r=>r.status==='maintenance').length})</div>
  `;

  // Room mini
  const mini = document.getElementById('dashRoomMini');
  if (mini) {
    const preview = state.rooms.slice(0,8);
    mini.innerHTML = `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
      ${preview.map(r => `
        <div style="background:var(--surface2);border-radius:8px;padding:10px;text-align:center;border:1px solid ${r.status==='occupied'?'rgba(0,200,150,0.3)':r.status==='vacant'?'rgba(0,229,255,0.2)':'rgba(255,215,0,0.3)'};cursor:pointer;" onclick="navigate('allrooms')">
          <div style="font-family:var(--font-head);font-size:16px;font-weight:800;">${r.num}</div>
          <div style="font-size:9px;color:var(--text-dim);font-family:var(--font-mono);">Cap ${r.cap}</div>
          <div style="width:6px;height:6px;border-radius:50%;margin:4px auto 0;background:${r.status==='occupied'?'var(--green)':r.status==='vacant'?'var(--accent)':'var(--yellow)'};box-shadow:0 0 5px ${r.status==='occupied'?'var(--green)':r.status==='vacant'?'var(--accent)':'var(--yellow)'}"></div>
        </div>
      `).join('')}
    </div>
    <div style="text-align:right;margin-top:10px;">
      <a onclick="navigate('allrooms')" style="font-size:12px;color:var(--accent);cursor:pointer;">View all ${state.rooms.length} rooms →</a>
    </div>`;
  }

  // Guest badge
  const gb = document.getElementById('guestBadge');
  if (gb) gb.textContent = state.guests.filter(g=>g.status==='active').length;

  // Notif badge
  const unread = state.notifications.filter(n=>!n.read).length;
  const nb = document.getElementById('notifBadge');
  if (nb) nb.textContent = unread;
  const ni = document.getElementById('notifIndicator');
  if (ni) ni.style.display = unread > 0 ? 'block' : 'none';

  // Revenue chart
  const vals = [65, 82, 74, 91, 88, 95, 79];
  const max = Math.max(...vals);
  const rc = document.getElementById('revenueChart');
  if (rc) rc.innerHTML = vals.map((v,i) => `
    <div class="rev-bar-wrap">
      <div class="rev-bar ${i===6?'secondary':'primary'}" style="height:${(v/max)*100}px"></div>
      <div class="rev-label">${['M','T','W','T','F','S','S'][i]}</div>
    </div>
  `).join('');

  renderActivityFeed();
}

// ============================================================
//  ACTIVITY FEED
// ============================================================
function addActivity(icon, bg, text) {
  state.activities.unshift({ icon, bg, text, time: 'Just now' });
  if (state.activities.length > 10) state.activities.pop();
  renderActivityFeed();
}
function renderActivityFeed() {
  const feed = document.getElementById('activityFeed');
  if (!feed) return;
  feed.innerHTML = state.activities.slice(0,5).map(a => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${a.bg}">${a.icon}</div>
      <div>
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
//  GUESTS
// ============================================================
function renderGuests() {
  const sf = state.guestStatusFilter;
  const search = document.querySelector('#page-guests input[type="text"]')?.value?.toLowerCase()||'';
  let guests = state.guests;
  if (sf==='active')   guests = guests.filter(g=>g.status==='active');
  if (sf==='checkout') guests = guests.filter(g=>g.status==='checkout');
  if (search) guests = guests.filter(g=>g.name.toLowerCase().includes(search)||g.room.includes(search));
  const tbody = document.getElementById('guestsTable');
  tbody.innerHTML = guests.map(g => `
    <tr>
      <td class="td-mono">${g.id}</td>
      <td class="td-name">${g.name}</td>
      <td class="td-mono">${g.room}</td>
      <td>${g.checkin}</td>
      <td>${g.checkout}</td>
      <td style="color:${g.amount-g.paid>0?'var(--accent2)':'var(--green)'}">₹${(g.amount-g.paid).toLocaleString()}</td>
      <td><span class="badge ${g.status==='active'?'badge-green':'badge-yellow'}">${g.status==='active'?'✓ Active':'⏰ Due'}</span></td>
      <td>
        <div class="flex-row">
          <button class="btn btn-sm btn-secondary" onclick="showToast('${g.name} | Room ${g.room} | Due: ₹${g.amount-g.paid}','info')">View</button>
          <button class="btn btn-sm btn-danger" onclick="removeGuest(${g.id})">✕</button>
        </div>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="8" style="text-align:center;color:var(--text-dim);padding:24px;">No guests found</td></tr>';
}
function filterGuestsFn(v) { renderGuests(); }
function filterGuestStatus(f, btn) {
  state.guestStatusFilter=f;
  document.querySelectorAll('#page-guests .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGuests();
}
function removeGuest(id) {
  const g = state.guests.find(x=>x.id===id);
  if (confirm(`Remove ${g.name}?`)) {
    state.guests = state.guests.filter(x=>x.id!==id);
    renderGuests(); showToast('Guest removed','info');
  }
}
function addGuest() {
  const name = document.getElementById('g-name').value.trim();
  const phone = document.getElementById('g-phone').value.trim();
  if (!name||!phone) { showToast('Name & phone required!','error'); return; }
  const room = document.getElementById('g-room').value;
  state.guests.push({ id:state.nextGuestId++, name, phone, room:room||'TBD', checkin:new Date().toISOString().split('T')[0], checkout:document.getElementById('g-checkout').value||'', status:'active', amount:0, paid:0 });
  if (room) { const r=state.rooms.find(x=>x.num===room); if(r){r.status='occupied';r.occupant=name;} }
  closeModal('addGuestModal');
  renderGuests(); addActivity('🚪','rgba(0,229,255,0.1)',`<strong>${name}</strong> added as guest in Room ${room||'TBD'}`);
  showToast(`${name} added!`,'success');
}

// ============================================================
//  CHECK IN/OUT
// ============================================================
function populateRoomDropdowns(ids=['ci-room']) {
  const vacant = state.rooms.filter(r=>r.status==='vacant');
  const opts = vacant.map(r=>`<option value="${r.num}">${r.num} — ${r.type} (Cap ${r.cap})</option>`).join('');
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<option value="">Select Room</option>${opts}`;
  });
}
function renderTodayCheckins() {
  const el = document.getElementById('todayCheckinList');
  if (!el) return;
  const recent = state.guests.slice(-3).reverse();
  if (!recent.length) { el.innerHTML = '<div style="color:var(--text-dim);padding:20px;text-align:center;font-size:13px;">No check-ins today</div>'; return; }
  el.innerHTML = recent.map(g => `
    <div class="maint-item">
      <div class="maint-priority low"></div>
      <div class="maint-info"><div class="maint-title">👤 ${g.name}</div><div class="maint-meta">Room ${g.room} · Checkout: ${g.checkout}</div></div>
      <span class="badge badge-green">Active</span>
    </div>
  `).join('');
}
function processCheckIn() {
  const name=document.getElementById('ci-name').value.trim();
  const phone=document.getElementById('ci-phone').value.trim();
  const room=document.getElementById('ci-room').value;
  const checkout=document.getElementById('ci-checkout').value;
  if (!name||!phone||!room||!checkout) { showToast('Fill all required fields!','error'); return; }
  state.guests.push({ id:state.nextGuestId++, name, phone, room, checkin:new Date().toISOString().split('T')[0], checkout, status:'active', amount:0, paid:parseInt(document.getElementById('ci-advance').value)||0 });
  const r=state.rooms.find(x=>x.num===room); if(r){r.status='occupied';r.occupant=name;}
  addActivity('🚪','rgba(0,229,255,0.1)',`<strong>${name}</strong> checked into Room ${room}`);
  showToast(`${name} checked into Room ${room}! ✅`,'success');
  clearCheckin(); renderTodayCheckins(); populateRoomDropdowns();
}
function clearCheckin() { ['ci-name','ci-phone','ci-idnum','ci-advance'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';}); }
function searchCheckout(val) {
  const list=document.getElementById('checkoutGuestList');
  const matches=state.guests.filter(g=>g.name.toLowerCase().includes(val.toLowerCase())||g.room.includes(val));
  if (!val) { list.innerHTML=''; return; }
  list.innerHTML = matches.map(g=>`
    <div class="maint-item" onclick="showBill(${g.id})" style="cursor:pointer">
      <div class="maint-priority ${g.status==='checkout'?'high':'medium'}"></div>
      <div class="maint-info"><div class="maint-title">👤 ${g.name}</div><div class="maint-meta">Room ${g.room} · Checkout: ${g.checkout}</div></div>
      <span style="color:var(--accent2);font-size:12px;font-family:var(--font-mono)">₹${g.amount-g.paid}</span>
    </div>
  `).join('') || '<div style="color:var(--text-dim);padding:20px;text-align:center">No guests found</div>';
}
function showBill(id) {
  const g=state.guests.find(x=>x.id===id);
  const days=g.checkout?Math.ceil((new Date(g.checkout)-new Date(g.checkin))/86400000):1;
  const due=g.amount-g.paid;
  document.getElementById('checkoutBillContent').innerHTML=`
    <div style="background:var(--surface2);border-radius:10px;padding:16px;margin-bottom:16px;">
      <div style="font-family:var(--font-head);font-size:15px;margin-bottom:12px;">🧾 Bill for ${g.name}</div>
      <table style="width:100%;font-size:13px;">
        <tr><td style="color:var(--text-dim)">Room</td><td class="td-mono" style="text-align:right">${g.room}</td></tr>
        <tr><td style="color:var(--text-dim)">Check-in</td><td style="text-align:right">${g.checkin}</td></tr>
        <tr><td style="color:var(--text-dim)">Check-out</td><td style="text-align:right">${g.checkout}</td></tr>
        <tr><td style="color:var(--text-dim)">Nights</td><td style="text-align:right">${days}</td></tr>
        <tr><td style="color:var(--text-dim)">Total Amount</td><td style="text-align:right">₹${g.amount.toLocaleString()}</td></tr>
        <tr><td style="color:var(--text-dim)">Paid</td><td style="color:var(--green);text-align:right">₹${g.paid.toLocaleString()}</td></tr>
        <tr style="border-top:1px solid var(--border)"><td style="font-weight:700;padding-top:8px">Balance Due</td><td style="font-weight:700;color:var(--accent2);text-align:right;padding-top:8px">₹${due.toLocaleString()}</td></tr>
      </table>
    </div>
    <button class="btn btn-success w-full" onclick="processCheckout(${id})">✅ Confirm Checkout</button>
  `;
}
function processCheckout(id) {
  const g=state.guests.find(x=>x.id===id);
  const r=state.rooms.find(x=>x.num===g.room);
  if(r){r.status='vacant';r.occupant='';}
  state.guests=state.guests.filter(x=>x.id!==id);
  document.getElementById('checkoutBillContent').innerHTML=`<div style="text-align:center;padding:40px;color:var(--green)"><div style="font-size:36px">✅</div><div style="margin-top:10px;font-size:15px;font-weight:600">${g.name} checked out!</div><div style="font-size:12px;color:var(--text-dim);margin-top:4px">Room ${g.room} is now vacant</div></div>`;
  document.getElementById('checkoutGuestList').innerHTML='';
  document.getElementById('co-search').value='';
  addActivity('🏃','rgba(255,69,69,0.1)',`<strong>${g.name}</strong> checked out from Room ${g.room}`);
  showToast(`${g.name} checked out!`,'success');
}

// ============================================================
//  BOOKINGS
// ============================================================
function renderBookings() {
  const f=state.bookingFilter;
  let bookings=state.bookings;
  if(f!=='all') bookings=bookings.filter(b=>b.status===f);
  document.getElementById('bookingsTable').innerHTML=bookings.map(b=>`
    <tr>
      <td class="td-mono">${b.id}</td>
      <td class="td-name">${b.guest}</td>
      <td>${b.room}</td>
      <td>${b.checkin}</td>
      <td>${b.checkout}</td>
      <td class="td-mono">₹${b.amount.toLocaleString()}</td>
      <td><span class="badge ${b.status==='confirmed'?'badge-green':b.status==='pending'?'badge-yellow':'badge-red'}">${b.status}</span></td>
      <td>
        <div class="flex-row">
          ${b.status==='pending'?`<button class="btn btn-sm btn-success" onclick="confirmBooking('${b.id}')">Confirm</button>`:''}
          ${b.status!=='cancelled'?`<button class="btn btn-sm btn-danger" onclick="cancelBooking('${b.id}')">Cancel</button>`:''}
        </div>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="8" style="text-align:center;color:var(--text-dim);padding:24px;">No bookings</td></tr>';
}
function filterBookings(f,btn){
  state.bookingFilter=f;
  document.querySelectorAll('#page-bookings .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderBookings();
}
function confirmBooking(id){const b=state.bookings.find(x=>x.id===id);b.status='confirmed';renderBookings();showToast(`Booking ${id} confirmed!`,'success');}
function cancelBooking(id){const b=state.bookings.find(x=>x.id===id);b.status='cancelled';renderBookings();showToast(`Booking ${id} cancelled`,'info');}
function addBooking(){
  const name=document.getElementById('b-name').value.trim();
  if(!name){showToast('Guest name required!','error');return;}
  const id='BK'+String(state.bookings.length+1).padStart(3,'0');
  state.bookings.push({id,guest:name,room:document.getElementById('b-type').value,checkin:document.getElementById('b-checkin').value,checkout:document.getElementById('b-checkout').value,amount:0,status:'confirmed'});
  closeModal('addBookingModal');renderBookings();showToast(`Booking for ${name} created!`,'success');
}

// ============================================================
//  BILLING
// ============================================================
function renderBilling() {
  document.getElementById('billingTable').innerHTML = state.transactions.map(t=>`
    <tr>
      <td class="td-mono">${t.id}</td>
      <td class="td-name">${t.guest}</td>
      <td class="td-mono">${t.room}</td>
      <td class="td-mono">₹${t.amount.toLocaleString()}</td>
      <td><span class="badge badge-blue">${t.method}</span></td>
      <td>${t.date}</td>
      <td><span class="badge ${t.status==='paid'?'badge-green':'badge-yellow'}">${t.status}</span></td>
      <td><button class="btn btn-sm btn-secondary" onclick="showToast('Invoice ${t.id} sent to printer','info')">🖨️ Print</button></td>
    </tr>
  `).join('');
}
function addPayment(){
  const guest=document.getElementById('inv-guest').value.trim();
  const amount=document.getElementById('inv-amount').value;
  if(!guest||!amount){showToast('Fill required fields!','error');return;}
  const id='INV-'+String(state.transactions.length+1).padStart(3,'0');
  state.transactions.unshift({id,guest,room:document.getElementById('inv-room').value,amount:parseInt(amount),method:document.getElementById('inv-method').value,date:new Date().toISOString().split('T')[0],status:'paid'});
  closeModal('invoiceModal');renderBilling();
  addActivity('💰','rgba(0,200,150,0.1)',`<strong>${guest}</strong> paid ₹${parseInt(amount).toLocaleString()}`);
  showToast(`Payment ₹${parseInt(amount).toLocaleString()} recorded!`,'success');
}

// ============================================================
//  MAINTENANCE
// ============================================================
function renderMaintenance(){
  ['high','medium','low'].forEach(p=>{
    const el=document.getElementById('maint-'+p);
    if(!el) return;
    const items=state.maintenance.filter(m=>m.priority===p);
    el.innerHTML=items.map(m=>`
      <div class="maint-item">
        <div class="maint-priority ${p}"></div>
        <div class="maint-info"><div class="maint-title">🔧 ${m.issue}</div><div class="maint-meta">Room ${m.room} · ${m.staff}</div></div>
        <span class="badge ${m.status==='completed'?'badge-green':m.status==='in-progress'?'badge-yellow':'badge-red'}">${m.status}</span>
      </div>
    `).join('') || `<div style="color:var(--text-dim);font-size:12px;padding:10px 0;">No ${p} priority items</div>`;
  });
}
function addMaintenance(){
  const desc=document.getElementById('m-desc').value.trim();
  if(!desc){showToast('Description required!','error');return;}
  state.maintenance.unshift({id:state.maintenance.length+1,room:document.getElementById('m-room').value,issue:desc,priority:document.getElementById('m-priority').value,staff:document.getElementById('m-staff').value,status:'pending'});
  closeModal('addMaintModal');renderMaintenance();showToast('Maintenance request created!','success');
}

// ============================================================
//  INVENTORY
// ============================================================
function renderInventory(){
  document.getElementById('inventoryTable').innerHTML=state.inventory.map(item=>{
    const pct=Math.min(Math.round((item.stock/(item.min*3))*100),100);
    const low=item.stock<=item.min;
    return `
      <tr>
        <td class="td-name">${item.name}</td>
        <td><span class="badge badge-purple">${item.cat}</span></td>
        <td>
          <div class="flex-row">
            <span style="color:${low?'var(--red)':'var(--text)'}"><strong>${item.stock}</strong></span>
            <div class="progress-bar" style="width:80px;flex-shrink:0"><div class="progress-fill" style="width:${pct}%;background:${low?'var(--red)':'var(--green)'}"></div></div>
          </div>
        </td>
        <td class="td-mono">${item.min}</td>
        <td><span class="badge ${low?'badge-red':'badge-green'}">${low?'⚠ Low':'✓ OK'}</span></td>
        <td><button class="btn btn-sm btn-secondary" onclick="restock(${item.id})">+ Restock</button></td>
      </tr>
    `;
  }).join('');
}
function restock(id){
  const item=state.inventory.find(x=>x.id===id);
  const qty=parseInt(prompt(`Restock "${item.name}". Current: ${item.stock}. Add quantity:`)||0);
  if(qty>0){item.stock+=qty;renderInventory();showToast(`Restocked ${item.name} by ${qty} units`,'success');}
}
function addInventoryItem(){
  const name=document.getElementById('itm-name').value.trim();
  if(!name){showToast('Item name required!','error');return;}
  state.inventory.push({id:state.inventory.length+1,name,cat:document.getElementById('itm-cat').value,stock:parseInt(document.getElementById('itm-stock').value)||0,min:parseInt(document.getElementById('itm-min').value)||10});
  closeModal('addItemModal');renderInventory();showToast(`${name} added!`,'success');
}

// ============================================================
//  REPORTS
// ============================================================
const reportData=[
  {month:'Sep 2025',total:'₹9.8L',rooms:'₹8.1L',extras:'₹1.7L',occ:'71%',guests:148},
  {month:'Oct 2025',total:'₹10.4L',rooms:'₹8.7L',extras:'₹1.7L',occ:'75%',guests:163},
  {month:'Nov 2025',total:'₹11.1L',rooms:'₹9.2L',extras:'₹1.9L',occ:'79%',guests:171},
  {month:'Dec 2025',total:'₹13.2L',rooms:'₹11.0L',extras:'₹2.2L',occ:'88%',guests:205},
  {month:'Jan 2026',total:'₹10.7L',rooms:'₹9.0L',extras:'₹1.7L',occ:'76%',guests:169},
  {month:'Feb 2026',total:'₹12.4L',rooms:'₹10.3L',extras:'₹2.1L',occ:'83%',guests:192},
];
function renderReports(){
  document.getElementById('reportsTable').innerHTML=reportData.map(r=>`
    <tr>
      <td class="td-name">${r.month}</td>
      <td class="td-mono">${r.total}</td>
      <td class="td-mono">${r.rooms}</td>
      <td class="td-mono">${r.extras}</td>
      <td><span style="color:var(--accent)">${r.occ}</span></td>
      <td>${r.guests}</td>
    </tr>
  `).join('');
}

// ============================================================
//  NOTIFICATIONS
// ============================================================
function renderNotifications(){
  const unread=state.notifications.filter(n=>!n.read).length;
  const nb=document.getElementById('notifBadge'); if(nb)nb.textContent=unread;
  const ni=document.getElementById('notifIndicator'); if(ni)ni.style.display=unread>0?'block':'none';
  const list=document.getElementById('notifList');
  list.innerHTML=state.notifications.map(n=>`
    <div class="notif-item ${n.read?'':'unread'}" onclick="markRead(${n.id})">
      <span class="notif-ico">${n.icon}</span>
      <div class="notif-body">
        <div class="notif-title-text">${n.title}</div>
        <div class="notif-msg">${n.msg}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      ${!n.read?'<span class="unread-dot"></span>':''}
    </div>
  `).join('');
}
function markRead(id){const n=state.notifications.find(x=>x.id===id);if(n)n.read=true;renderNotifications();}
function markAllRead(){state.notifications.forEach(n=>n.read=true);renderNotifications();showToast('All read','info');}

// ============================================================
//  GLOBAL SEARCH
// ============================================================
function globalSearchFn(val) {
  if (!val) return;
  const v = val.toLowerCase();
  const roomMatch = state.rooms.find(r => r.num.toLowerCase().includes(v));
  const guestMatch = state.guests.find(g => g.name.toLowerCase().includes(v));
  if (roomMatch) { navigate('allrooms'); setTimeout(()=>showToast(`Found Room ${roomMatch.num}`,'info'),300); }
  else if (guestMatch) { navigate('guests'); setTimeout(()=>showToast(`Found guest: ${guestMatch.name}`,'info'),300); }
}

// ============================================================
//  TABS
// ============================================================
function switchTab(tabId, btn) {
  const page = btn.closest('.page');
  page.querySelectorAll('[id$="-tab"]').forEach(t=>t.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
  page.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  if (tabId==='checkin-tab') populateRoomDropdowns();
  if (tabId==='checkout-tab') renderTodayCheckins();
}

// ============================================================
//  MISC
// ============================================================
function exportReport(){ showToast('Report exported to CSV!','success'); }

// ============================================================
//  INIT
// ============================================================
function initApp() {
  const d = new Date();
  const el = document.getElementById('currentDate');
  if (el) el.textContent = d.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  // Set default dates
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+1);
  const tmrStr = tomorrow.toISOString().split('T')[0];
  const todStr = d.toISOString().split('T')[0];
  ['ci-checkout','g-checkout','b-checkout','m-date'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=tmrStr;});
  const bci=document.getElementById('b-checkin'); if(bci) bci.value=todStr;
  updateDashboard();
  populateRoomDropdowns(['ci-room']);
  renderRecentlyAdded();
}