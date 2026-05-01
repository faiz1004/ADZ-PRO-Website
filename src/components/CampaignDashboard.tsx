"use client"

import React from 'react';
import { BarChart2, Zap, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CampaignDashboard() {
  const bars = [45, 60, 40, 75, 85, 95];
  const months = ['J', 'F', 'M', 'A', 'M', 'J'];

  return (
    <div className="relative group/dash animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
      {/* CSS Keyframes */}
      <style jsx global>{`
        @keyframes barGrow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to   { transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes dashPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes dashFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>

      {/* Floating Badge A - Top Left */}
      <div className="absolute -top-4 -left-4 z-30 bg-gradient-to-br from-[#1E8BB5] to-[#0D6A91] rounded-xl px-4 py-2 shadow-xl shadow-[#1E8BB5]/30 hidden sm:block">
        <span className="text-white text-[11px] font-bold whitespace-nowrap">🏆 Top Performer</span>
      </div>

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-[24px] border border-[#1E8BB5]/25 bg-gradient-to-br from-[#0A1628] to-[#0F1E35] dark:from-[#0A1628] dark:to-[#0F1E35] light:from-[#E8F4FA] light:to-[#F0F7FB] p-6 sm:p-8 shadow-2xl transition-colors duration-500">
        
        {/* Layer 1: Background Orbs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#1E8BB5]/20 blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#2BA8D8]/15 blur-[50px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1E8BB5 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        {/* Layer 2: Browser Chrome */}
        <div className="flex items-center gap-2 mb-8 bg-white/5 dark:bg-white/5 light:bg-black/5 border-b border-white/10 dark:border-white/10 light:border-black/5 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-md px-4 py-1 text-[10px] text-white/40 dark:text-white/40 light:text-black/40 font-mono w-40 text-center">
              adzpro.co.in/dashboard
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded bg-white/5 dark:bg-white/5 light:bg-black/5" />
            <div className="w-5 h-5 rounded bg-white/5 dark:bg-white/5 light:bg-black/5" />
          </div>
        </div>

        {/* Layer 3: Dashboard Content */}
        <div className="space-y-6">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { label: 'ROAS', val: '4.2x', change: '↑ 127%', icon: <BarChart2 size={12} /> },
              { label: 'REACH', val: '2.1M', change: '↑ 84%', icon: <User size={12} /> },
              { label: 'CPL', val: '↓ 62%', change: 'Optimized', icon: <Zap size={12} />, success: true }
            ].map((card, i) => (
              <div key={i} className="bg-[#1E8BB5]/10 border border-[#1E8BB5]/20 rounded-xl p-3 sm:p-4 space-y-1">
                <div className="flex items-center justify-between opacity-50">
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white dark:text-white light:text-black">{card.label}</span>
                  <div className="text-[#1E8BB5]">{card.icon}</div>
                </div>
                <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#1E8BB5] to-[#2BA8D8] bg-clip-text text-transparent">
                  {card.val}
                </div>
                <div className={cn("text-[9px] sm:text-[10px] px-2 py-0.5 rounded inline-block font-bold", 
                                  card.success ? "bg-[#10B981]/15 text-[#10B981]" : "bg-[#10B981]/10 text-[#10B981]")}>
                  {card.change}
                </div>
              </div>
            ))}
          </div>

          {/* Bar Chart Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-white/40 dark:text-white/40 light:text-black/40">
              <span>Monthly Performance</span>
              <span>Last 6 Months</span>
            </div>
            <div className="h-24 sm:h-32 flex items-end gap-2 sm:gap-3 px-2">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={cn(
                      "w-full rounded-t-md transition-all duration-1000 ease-out",
                      i === bars.length - 1 
                        ? "bg-gradient-to-t from-[#2BA8D8] to-[#1E8BB5] shadow-[0_0_12px_rgba(30,139,181,0.5)]" 
                        : "bg-gradient-to-t from-[#0D6A91] to-[#1E8BB5] opacity-60"
                    )}
                    style={{ 
                      height: `${h}%`,
                      animation: `barGrow 1s ease-out ${i * 0.1}s forwards`
                    }}
                  />
                  <span className="text-[8px] opacity-30 text-white dark:text-white light:text-black">{months[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status Indicators Row */}
          <div className="flex justify-between items-center pt-2">
            <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-3 py-1.5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" style={{ animation: 'dashPulse 2s infinite' }} />
              <span className="text-[9px] sm:text-[10px] font-black text-[#10B981] uppercase tracking-tighter">3 Campaigns Live</span>
            </div>
            <div className="bg-[#1E8BB5]/10 border border-[#1E8BB5]/30 rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="text-[10px]">⚡</span>
              <span className="text-[9px] sm:text-[10px] font-black text-[#1E8BB5] uppercase tracking-tighter">12 New Leads Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge B - Bottom Right */}
      <div className="absolute -bottom-6 -right-4 z-30 bg-[#0F1E35] dark:bg-[#0F1E35] light:bg-white border border-[#1E8BB5]/30 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 hidden sm:flex"
           style={{ animation: 'dashFloat 4s ease-in-out infinite' }}>
        <div className="flex -space-x-2">
          {[ '#1E8BB5', '#2BA8D8', '#10B981' ].map((c, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0F1E35] dark:border-[#0F1E35] light:border-white" style={{ background: c }} />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-white dark:text-white light:text-black leading-none">500+ Brands</span>
          <span className="text-[9px] text-white/40 dark:text-white/40 light:text-black/40 uppercase font-black">Trust Adz Pro</span>
        </div>
      </div>
    </div>
  );
}
