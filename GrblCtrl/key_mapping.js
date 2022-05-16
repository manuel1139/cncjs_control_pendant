exports.keyMapping = {
    0b0000001: { cmd: 'command',  gc: 'G91Z-10' }, 
    0b0000010: { cmd: 'command', gc: 'G91Z-1' },
    0b0000100: { cmd: 'command', gc: 'G91Z-.1' },
    0b0001000: { cmd: 'command', gc: '$J=0x85' },
    0b0010000: { cmd: 'command', gc: '$J=0x85' },
    0b0100000: { cmd: 'command', gc: '$J=0x85' },
    0b00100000:{ cmd: 'command', gc: 'unlock' },
    0b01000000:{ cmd: 'command', gc: 'reset' },
    0b10000000:{ cmd: 'command', gc: 'stop' },
}
'unlock'