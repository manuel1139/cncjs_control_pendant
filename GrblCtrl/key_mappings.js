exports.KeyMappings = {
    0b00000001: { type: 1, cmd: 'command',  gc: 'G91X-' }, 
    0b00000010: { type: 1, cmd: 'command', gc: 'G91X+' },
    0b00000100: { type: 1, cmd: 'command', gc: 'G91Y-' },
    0b00001000: { type: 1, cmd: 'command', gc: 'G91Y+' },
    0b00010000: { type: 1, cmd: 'command', gc: 'G91Z+' },
    0b00100000: { type: 1, cmd: 'command', gc: 'G91Z-' },
    0b01000000: { type: 2, cmd: 'command', gc: 'stop'  },
    0b10000000: { type: 2, cmd: 'command', gc: 'unlock'  },
 
}
