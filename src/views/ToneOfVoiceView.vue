<script setup lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue'
</script>

<template>
  <div class="space-y-8">
    <Breadcrumb />

    <div>
      <h1 class="font-heading text-3xl font-bold text-text mb-4">Tone of Voice</h1>
      <p class="text-muted mb-8">
        Guidelines for communication style in the Agentic Design System.
      </p>

      <div class="space-y-12">
        <!-- Overview -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Overview</h2>
          <p class="text-muted mb-6">
            The Agentic Design System uses a warm, conversational, and clear communication style 
            that is approachable and helpful without being condescending.
          </p>

          <div class="bg-surface border border-border rounded-xl p-6">
            <p class="text-muted mb-4">
              Key principles:
            </p>
            <ul class="list-disc list-inside text-muted space-y-2">
              <li>Hangat dan ramah</li>
              <li>Jelas dan ringkas</li>
              <li>Tidak menggurui</li>
              <li>Bantu pengguna mencapai tujuan</li>
              <li>Gunakan bahasa Indonesia yang baik dan benar</li>
            </ul>
          </div>
        </section>

        <!-- Microcopy Examples -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Microcopy Examples</h2>

          <div class="space-y-6">
            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Empty States</h3>
              <div class="space-y-4">
                <div class="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <p class="text-muted mb-2">Belum ada data yang tersedia</p>
                  <p class="text-sm text-neutral-500">Silakan tambahkan data baru untuk memulai</p>
                </div>
              </div>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Loading States</h3>
              <div class="space-y-4">
                <div class="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <p class="text-muted mb-2">Sedang memproses...</p>
                  <p class="text-sm text-neutral-500">Mohon tunggu sebentar</p>
                </div>
              </div>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Success States</h3>
              <div class="space-y-4">
                <div class="bg-success-50 border border-success-200 rounded-lg p-4">
                  <p class="text-success-700 mb-2">Berhasil!</p>
                  <p class="text-sm text-success-600">Data telah disimpan dengan sukses</p>
                </div>
              </div>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Error States</h3>
              <div class="space-y-4">
                <div class="bg-danger-50 border border-danger-200 rounded-lg p-4">
                  <p class="text-danger-700 mb-2">Terjadi kesalahan</p>
                  <p class="text-sm text-danger-600">Silakan coba lagi atau hubungi dukungan</p>
                </div>
              </div>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Confirmation</h3>
              <div class="space-y-4">
                <div class="bg-info-50 border border-info-200 rounded-lg p-4">
                  <p class="text-info-700 mb-2">Apakah Anda yakin?</p>
                  <p class="text-sm text-info-600">Tindakan ini tidak dapat dibatalkan</p>
                </div>
              </div>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Validation</h3>
              <div class="space-y-4">
                <div class="bg-warning-50 border border-warning-200 rounded-lg p-4">
                  <p class="text-warning-700 mb-2">Mohon periksa kembali</p>
                  <p class="text-sm text-warning-600">Field ini wajib diisi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Writing Guidelines -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Writing Guidelines</h2>

          <div class="space-y-6">
            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Gunakan Bahasa yang Jelas</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li>Hindari jargon teknis yang tidak perlu</li>
                <li>Gunakan kalimat pendek dan sederhana</li>
                <li>Jelaskan konsep kompleks dengan bahasa yang mudah dipahami</li>
              </ul>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Berikan Konteks</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li>Jelaskan mengapa suatu tindakan diperlukan</li>
                <li>Berikan informasi tentang apa yang akan terjadi selanjutnya</li>
                <li>Tunjukkan dampak dari tindakan pengguna</li>
              </ul>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Gunakan Nada Positif</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li>Fokus pada solusi, bukan masalah</li>
                <li>Gunakan bahasa yang mendorong dan memotivasi</li>
                <li>Hindari nada yang menghakimi atau kritis</li>
              </ul>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-text mb-2">Tetap Konsisten</h3>
              <ul class="list-disc list-inside text-muted space-y-2">
                <li>Gunakan istilah yang sama untuk konsep yang sama</li>
                <li>Pertahankan gaya penulisan yang konsisten</li>
                <li>Gunakan format yang seragam untuk pesan serupa</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Examples -->
        <section>
          <h2 class="font-heading text-2xl font-semibold text-text mb-4">Examples</h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-success mb-2">Good Example</h3>
              <div class="bg-success-50 border border-success-200 rounded-lg p-4">
                <p class="text-success-700 mb-2">Selamat! Akun Anda telah dibuat.</p>
                <p class="text-sm text-success-600">Anda sekarang dapat mengakses semua fitur platform.</p>
              </div>
            </div>

            <div class="bg-surface border border-border rounded-xl p-4">
              <h3 class="font-heading font-semibold text-danger mb-2">Bad Example</h3>
              <div class="bg-danger-50 border border-danger-200 rounded-lg p-4">
                <p class="text-danger-700 mb-2">ERROR: Akun gagal dibuat.</p>
                <p class="text-sm text-danger-600">Anda melakukan kesalahan. Coba lagi.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>