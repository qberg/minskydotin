import type { EmailTemplateProps } from '@/types/form'
import type * as React from 'react'

// Enhanced terminal/cyberpunk theme with more matrix-inspired elements
const colors = {
  primary: '#00FF41', // Matrix green
  secondary: '#008F11', // Darker green
  tertiary: '#003B00', // Even darker green for depth
  background: '#0D0208', // Near black
  cardBackground: '#0F0F0F', // Darker gray
  text: '#FFFFFF', // White text
  lightText: '#CCCCCC', // Light gray text
  dimText: '#888888', // Dimmer text for less important elements
  accent: '#00FF41', // Matrix green accent
  white: '#FFFFFF',
  border: '#00FF41', // Matrix green border
  shadow: '#00FF4133', // Matrix green shadow with transparency
}

const terminalFont = 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace'

// ASCII art for header decoration
const asciiDecoration = `
┌───────────────────────────────────────────┐
│                                           │
└───────────────────────────────────────────┘`

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  message,
}) => (
  <div
    style={{
      fontFamily: terminalFont,
      backgroundColor: colors.background,
      padding: '20px',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      color: colors.text,
      backgroundImage: `radial-gradient(${colors.tertiary}22 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
    }}
  >
    <div
      style={{
        backgroundColor: colors.background,
        borderTop: `2px solid ${colors.primary}`,
        borderLeft: `2px solid ${colors.primary}`,
        borderRight: `2px solid ${colors.primary}`,
        padding: '25px',
        borderRadius: '8px 8px 0 0',
        textAlign: 'center',
        boxShadow: `0 0 15px ${colors.shadow}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Terminal decoration line */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '4px',
          background: `linear-gradient(90deg, ${colors.background}, ${colors.primary}, ${colors.background})`,
          opacity: '0.7',
        }}
      ></div>

      <pre
        style={{
          color: colors.secondary,
          fontSize: '10px',
          margin: '0 0 10px 0',
          opacity: '0.7',
          letterSpacing: '0px',
          lineHeight: '1',
        }}
      >
        {asciiDecoration}
      </pre>

      <h1
        style={{
          color: colors.primary,
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0',
          letterSpacing: '3px',
          textShadow: `0 0 5px ${colors.primary}`,
        }}
      >
        &gt; INCOMING_TRANSMISSION
      </h1>

      <div
        style={{
          fontSize: '10px',
          color: colors.secondary,
          margin: '8px 0 0',
          fontFamily: terminalFont,
        }}
      >
        {`// TIMESTAMP: ${new Date().toISOString()} //`}
      </div>
    </div>

    <div
      style={{
        backgroundColor: colors.background,
        padding: '30px',
        borderRadius: '0 0 8px 8px',
        borderBottom: `2px solid ${colors.primary}`,
        borderLeft: `2px solid ${colors.primary}`,
        borderRight: `2px solid ${colors.primary}`,
        boxShadow: `0 0 20px ${colors.shadow}`,
        position: 'relative',
      }}
    >
      {/* Blinking cursor effect - using CSS animation that works in email clients */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          width: '10px',
          height: '20px',
          backgroundColor: colors.primary,
          opacity: '0.7',
        }}
      ></div>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.7; }
          }
          
          @keyframes scanline {
            0% { transform: translateY(0); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>

      {/* Scanline effect */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '2px',
          backgroundColor: colors.primary,
          opacity: '0.1',
          pointerEvents: 'none',
        }}
      ></div>

      <h2
        style={{
          color: colors.white,
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '1px',
        }}
      >
        <span style={{ color: colors.accent, margin: '0 8px' }}>[</span>
        NEW_CONTACT_DETECTED
        <span style={{ color: colors.accent, margin: '0 8px' }}>]</span>
      </h2>

      <p
        style={{
          color: colors.lightText,
          fontSize: '16px',
          lineHeight: '24px',
          margin: '0 0 24px 0',
          fontFamily: terminalFont,
        }}
      >
        &gt; init contact_protocol.sh
        <br />
        &gt; scanning data packets...
        <br />
        &gt; decryption complete
      </p>

      <div
        style={{
          backgroundColor: colors.cardBackground,
          borderRadius: '6px',
          padding: '20px',
          marginBottom: '24px',
          border: `1px solid ${colors.secondary}`,
          boxShadow: `inset 0 0 10px ${colors.shadow}`,
          position: 'relative',
        }}
      >
        {/* Terminal header bar */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '6px',
            backgroundColor: colors.secondary,
            borderRadius: '6px 6px 0 0',
          }}
        ></div>

        {/* Subject ID (Name) */}
        <div
          style={{
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px',
          }}
        >
          <p
            style={{
              color: colors.primary,
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '0 0 4px 0',
              letterSpacing: '1px',
            }}
          >
            &gt; SUBJECT_ID:
          </p>
          <p
            style={{
              color: colors.white,
              fontSize: '16px',
              margin: '0',
              fontFamily: terminalFont,
              backgroundColor: 'rgba(0, 255, 65, 0.05)',
              padding: '8px',
              borderRadius: '4px',
              wordBreak: 'break-all',
              border: `1px solid ${colors.tertiary}`,
              boxShadow: `inset 0 0 5px ${colors.shadow}`,
            }}
          >
            {fullName}
          </p>
        </div>

        {/* Comm Channel (Email) */}
        <div
          style={{
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: colors.primary,
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '0 0 4px 0',
              letterSpacing: '1px',
            }}
          >
            &gt; COMM_CHANNEL:
          </p>
          <p
            style={{
              color: colors.white,
              fontSize: '16px',
              margin: '0',
              fontFamily: terminalFont,
              backgroundColor: 'rgba(0, 255, 65, 0.05)',
              padding: '8px',
              borderRadius: '4px',
              wordBreak: 'break-all',
              border: `1px solid ${colors.tertiary}`,
              boxShadow: `inset 0 0 5px ${colors.shadow}`,
            }}
          >
            <a href={`mailto:${email}`} style={{ color: colors.primary, textDecoration: 'none' }}>
              {email}
            </a>
          </p>
        </div>

        {/* Secondary Comm (Phone) */}
        <div
          style={{
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: colors.primary,
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '0 0 4px 0',
              letterSpacing: '1px',
            }}
          >
            &gt; SECONDARY_COMM:
          </p>
          <p
            style={{
              color: colors.white,
              fontSize: '16px',
              margin: '0',
              fontFamily: terminalFont,
              backgroundColor: 'rgba(0, 255, 65, 0.05)',
              padding: '8px',
              borderRadius: '4px',
              wordBreak: 'break-all',
              border: `1px solid ${colors.tertiary}`,
              boxShadow: `inset 0 0 5px ${colors.shadow}`,
            }}
          >
            {phone && phone.trim() ? (
              <a href={`tel:${phone}`} style={{ color: colors.primary, textDecoration: 'none' }}>
                {phone}
              </a>
            ) : (
              <span style={{ color: colors.dimText, fontStyle: 'italic' }}>NULL</span>
            )}
          </p>
        </div>

        {/* Transmission (Message) */}
        <div
          style={{
            marginBottom: '0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: colors.primary,
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '0 0 4px 0',
              letterSpacing: '1px',
            }}
          >
            &gt; TRANSMISSION:
          </p>
          <p
            style={{
              color: colors.white,
              fontSize: '16px',
              margin: '0',
              fontFamily: terminalFont,
              backgroundColor: 'rgba(0, 255, 65, 0.05)',
              padding: '8px',
              borderRadius: '4px',
              wordBreak: 'break-all',
              border: `1px solid ${colors.tertiary}`,
              boxShadow: `inset 0 0 5px ${colors.shadow}`,
              whiteSpace: 'pre-wrap',
              lineHeight: '1.5',
            }}
          >
            {message && message.trim() ? (
              message
            ) : (
              <span style={{ color: colors.dimText, fontStyle: 'italic' }}>NO_MESSAGE_CONTENT</span>
            )}
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '32px',
          position: 'relative',
        }}
      >
        <a
          href="https://your-admin-dashboard.com/contacts"
          style={{
            backgroundColor: colors.background,
            borderRadius: '4px',
            color: colors.primary,
            fontSize: '16px',
            fontWeight: 'bold',
            textDecoration: 'none',
            padding: '12px 20px',
            display: 'inline-block',
            textAlign: 'center',
            border: `2px solid ${colors.primary}`,
            letterSpacing: '1px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: `0 0 10px ${colors.shadow}`,
          }}
        >
          &gt; ENTER_SYSTEM
        </a>
      </div>
    </div>

    <hr
      style={{
        borderColor: colors.tertiary,
        margin: '32px 0 20px',
        opacity: '0.5',
        height: '1px',
        background: `linear-gradient(90deg, ${colors.background}, ${colors.secondary}, ${colors.background})`,
        border: 'none',
      }}
    />

    <div
      style={{
        textAlign: 'center',
        padding: '0 30px 30px',
      }}
    >
      <p
        style={{
          color: colors.dimText,
          fontSize: '12px',
          margin: '0 0 8px 0',
          letterSpacing: '1px',
          fontFamily: terminalFont,
        }}
      >
        THIS_IS_AN_AUTOMATED_MESSAGE // DO_NOT_REPLY_DIRECTLY
      </p>
      <p
        style={{
          color: colors.dimText,
          fontSize: '12px',
          margin: '0 0 8px 0',
          letterSpacing: '1px',
          fontFamily: terminalFont,
        }}
      >
        &copy; {new Date().getFullYear()} SYSTEM_CORE // ALL_RIGHTS_RESERVED
      </p>
      <div
        style={{
          fontSize: '10px',
          color: colors.tertiary,
          margin: '15px 0 0',
          opacity: '0.5',
        }}
      >
        {`// CONNECTION_TERMINATED //`}
      </div>
    </div>
  </div>
)

export default EmailTemplate
