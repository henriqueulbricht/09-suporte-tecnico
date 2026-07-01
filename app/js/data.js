/**
 * data.js — Dados mock dos chamados de suporte técnico
 */

export const METRICS = [
  {
    id: 'open',
    label: 'Chamados Abertos',
    value: '42',
    icon: 'assignment',
    iconVariant: 'icon-variant-blue',
    iconFill: true,
  },
  {
    id: 'in-progress',
    label: 'Em Atendimento',
    value: '18',
    icon: 'pending_actions',
    iconVariant: 'icon-variant-indigo',
    iconFill: true,
  },
  {
    id: 'waiting-parts',
    label: 'Aguardando Peças',
    value: '05',
    icon: 'inventory_2',
    iconVariant: 'icon-variant-amber',
    iconFill: true,
  },
  {
    id: 'resolved-today',
    label: 'Concluídos Hoje',
    value: '12',
    icon: 'task_alt',
    iconVariant: 'icon-variant-gray',
    iconFill: true,
  },
];

export const CATEGORIES = [
  { id: 'all',       label: 'Todos' },
  { id: 'ti',        label: 'Informática/TI' },
  { id: 'eletrica',  label: 'Elétrica' },
  { id: 'civil',     label: 'Predial/Civil' },
  { id: 'seguranca', label: 'Segurança Eletrônica' },
  { id: 'telecom',   label: 'Telecomunicações' },
];

/** @type {Array<{id:string, subject:string, category:string, priority:string, status:string, hasAccent?:boolean}>} */
export const TICKETS = [
  {
    id: '#TK-102',
    subject: 'Manutenção de Rede',
    category: 'ti',
    priority: 'critical',
    status: 'progress',
  },
  {
    id: '#TK-105',
    subject: 'Reparo de Ar-condicionado',
    category: 'civil',
    priority: 'medium',
    status: 'validating',
  },
  {
    id: '#TK-108',
    subject: 'Falha no Nobreak',
    category: 'eletrica',
    priority: 'high',
    status: 'pending',
    hasAccent: true,
  },
  {
    id: '#TK-111',
    subject: 'Câmera de segurança offline',
    category: 'seguranca',
    priority: 'high',
    status: 'open',
  },
  {
    id: '#TK-115',
    subject: 'Link de internet instável',
    category: 'telecom',
    priority: 'critical',
    status: 'progress',
  },
  {
    id: '#TK-119',
    subject: 'Troca de lâmpadas corredor B',
    category: 'civil',
    priority: 'low',
    status: 'pending',
  },
  {
    id: '#TK-122',
    subject: 'Atualização de firewall',
    category: 'ti',
    priority: 'medium',
    status: 'resolved',
  },
  {
    id: '#TK-124',
    subject: 'Quadro elétrico sala servidores',
    category: 'eletrica',
    priority: 'critical',
    status: 'open',
    hasAccent: true,
  },
];

export const PRIORITY_CONFIG = {
  critical: { label: 'Crítica',  dotClass: 'priority__dot--critical', labelClass: 'priority__label--critical' },
  high:     { label: 'Alta',     dotClass: 'priority__dot--high',     labelClass: 'priority__label--high' },
  medium:   { label: 'Média',    dotClass: 'priority__dot--medium',   labelClass: 'priority__label--medium' },
  low:      { label: 'Baixa',    dotClass: 'priority__dot--low',      labelClass: 'priority__label--low' },
};

export const STATUS_CONFIG = {
  progress:   { label: 'Em Progresso', badgeClass: 'status-badge--progress' },
  validating: { label: 'Validando',    badgeClass: 'status-badge--validating' },
  pending:    { label: 'Pendente',     badgeClass: 'status-badge--pending' },
  open:       { label: 'Aberto',       badgeClass: 'status-badge--open' },
  resolved:   { label: 'Concluído',    badgeClass: 'status-badge--resolved' },
};

export const CATEGORY_CONFIG = {
  ti:        { label: 'Informática/TI',     badgeClass: 'badge--ti' },
  civil:     { label: 'Predial/Civil',      badgeClass: 'badge--civil' },
  eletrica:  { label: 'Elétrica',           badgeClass: 'badge--eletrica' },
  seguranca: { label: 'Segurança Eletrônica', badgeClass: 'badge--seguranca' },
  telecom:   { label: 'Telecomunicações',   badgeClass: 'badge--telecom' },
};
